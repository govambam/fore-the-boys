import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import Navigation from "@/components/Navigation";
import {
  Trophy,
  Target,
  DollarSign,
  Users,
  Calculator,
  Medal,
  ExternalLink,
} from "lucide-react";
import {
  fetchScores,
  fetchContests,
  transformScoresData,
  transformContestData,
  testConnection,
  checkTables,
  inspectTableStructure,
  supabase,
  type Score,
  type Contest,
} from "@/lib/supabase";

// Player names
const players = ["Ivan", "Patrick", "Jack", "Marshall"];
const playerInitials = { Ivan: "I", Patrick: "P", Jack: "J", Marshall: "M" };

// Course data
const courseData = {
  scarecrow: {
    name: "Scarecrow",
    holes: 18,
    pars: [4, 3, 5, 3, 4, 5, 4, 4, 3, 4, 4, 5, 4, 4, 5, 3, 4, 4],
    contestHoles: {
      2: "closest", // Par 3
      3: "long", // Par 5
      4: "closest", // Par 3
      6: "long", // Par 5
      9: "closest", // Par 3
      11: "closest", // Par 3
      12: "long", // Par 5
      15: "long", // Par 5
      16: "closest", // Par 3
    },
  },
  gambleSands: {
    name: "Gamble Sands",
    holes: 18,
    pars: [4, 4, 5, 3, 4, 3, 5, 4, 4, 3, 4, 4, 5, 4, 4, 3, 4, 5],
    contestHoles: {
      3: "long", // Par 5
      4: "closest", // Par 3
      6: "closest", // Par 3
      7: "long", // Par 5
      10: "closest", // Par 3
      13: "long", // Par 5
      16: "closest", // Par 3
      18: "long", // Par 5
    },
  },
  quicksands: {
    name: "Quicksands",
    holes: 14,
    pars: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    contestHoles: {}, // Team scramble, no individual contests
  },
};

// Default empty scores structure
const defaultScores = {
  scarecrow: {
    Ivan: new Array(18).fill(null),
    Patrick: new Array(18).fill(null),
    Jack: new Array(18).fill(null),
    Marshall: new Array(18).fill(null),
  },
  gambleSands: {
    Ivan: new Array(18).fill(null),
    Patrick: new Array(18).fill(null),
    Jack: new Array(18).fill(null),
    Marshall: new Array(18).fill(null),
  },
  quicksands: {
    "IG + JC": new Array(14).fill(null),
    "PT + MR": new Array(14).fill(null),
  },
};

// Default empty contest winners
const defaultContestWinners = {
  scarecrow: {},
  gambleSands: {},
  quicksands: {},
};

// Calculate Stableford points
const calculateStablefordPoints = (
  strokes: number | null,
  par: number,
): number => {
  // Return 0 points for null/undefined strokes
  if (strokes === null || strokes === undefined) {
    return 0;
  }

  const diff = strokes - par;
  if (diff <= -2) return 8;
  if (diff === -1) return 4;
  if (diff === 0) return 2;
  if (diff === 1) return 1;
  return 0;
};

// Get visual indicator styling for score
const getScoreIndicator = (score: number | null, par: number) => {
  // Return empty string for null/undefined scores
  if (score === null || score === undefined) {
    return "";
  }

  const diff = score - par;

  if (diff <= -2) {
    // Eagle: two concentric circles
    return "relative before:absolute before:inset-1 before:border-2 before:border-yellow-500 before:rounded-full before:aspect-square after:absolute after:inset-2 after:border-2 after:border-yellow-500 after:rounded-full after:aspect-square";
  } else if (diff === -1) {
    // Birdie: one circle
    return "relative before:absolute before:inset-1 before:border-2 before:border-green-500 before:rounded-full before:aspect-square";
  } else if (diff === 1) {
    // Bogey: one square
    return "relative before:absolute before:inset-1 before:border-2 before:border-orange-500 before:aspect-square";
  } else if (diff >= 2) {
    // Double Bogey+: two nested squares
    return "relative before:absolute before:inset-1 before:border-2 before:border-red-500 before:aspect-square after:absolute after:inset-2 after:border-2 after:border-red-500 after:aspect-square";
  }

  return ""; // Par has no indicator
};

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState("stableford");
  const [scores, setScores] = useState(defaultScores);
  const [contestWinners, setContestWinners] = useState(defaultContestWinners);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Function to refresh scores data
  const refreshScores = async () => {
    try {
      console.log("🔄 Real-time update: Refreshing scores data...");
      const scoresData = await fetchScores();
      const transformedScores = transformScoresData(scoresData);
      setScores(transformedScores);
      console.log("✅ Scores data refreshed successfully");
    } catch (err) {
      console.error("❌ Error refreshing scores:", err);
    }
  };

  // Function to refresh contests data
  const refreshContests = async () => {
    try {
      console.log("🔄 Real-time update: Refreshing contests data...");
      const contestsData = await fetchContests();
      const transformedContests = transformContestData(contestsData);
      setContestWinners(transformedContests);
      console.log("✅ Contests data refreshed successfully");
    } catch (err) {
      console.error("❌ Error refreshing contests:", err);
    }
  };

  // Fetch data from Supabase on component mount
  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        setError(null);

        console.log("=== Starting Leaderboard Data Load ===");

        // Test connection first
        const connectionOk = await testConnection();
        if (!connectionOk) {
          throw new Error(
            "Could not connect to Supabase. Please check your internet connection.",
          );
        }

        // Check if tables exist and are accessible
        const tableCheck = await checkTables();

        // Inspect table structures for debugging
        if (tableCheck.scores) {
          await inspectTableStructure("scores");
        }
        if (tableCheck.contests) {
          await inspectTableStructure("contests");
        }

        // Handle missing tables gracefully - show setup instructions but continue with empty data
        if (!tableCheck.scores || !tableCheck.contests) {
          const missingTables = [];
          if (!tableCheck.scores) missingTables.push("scores");
          if (!tableCheck.contests) missingTables.push("contests");

          console.warn(
            `Missing tables: ${missingTables.join(", ")}. Using empty data.`,
          );

          // Set a user-friendly warning instead of an error
          setError(
            `Database setup required: Missing ${missingTables.join(" and ")} table${missingTables.length > 1 ? "s" : ""}. Please run the setup SQL scripts to create the required tables. Currently showing empty leaderboard.`,
          );
        }

        // Fetch data
        console.log("Fetching tournament data...");
        let scoresData: Score[] = [];
        let contestsData: Contest[] = [];

        if (tableCheck.scores) {
          scoresData = await fetchScores();
        } else {
          console.warn("Scores table not accessible, using empty data");
        }

        if (tableCheck.contests) {
          contestsData = await fetchContests();
        } else {
          console.warn("Contests table not accessible, using empty data");
        }

        console.log("Raw data received:", {
          scores: scoresData.length,
          contests: contestsData.length,
        });

        const transformedScores = transformScoresData(scoresData);
        const transformedContests = transformContestData(contestsData);

        console.log("Data transformed successfully");
        setScores(transformedScores);
        setContestWinners(transformedContests);

        console.log("=== Leaderboard Data Load Complete ===");
      } catch (err) {
        console.error("Error loading leaderboard data:", err);
        const errorMessage =
          err instanceof Error
            ? err.message
            : "Failed to load leaderboard data. Please try again.";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  // Set up real-time subscriptions
  useEffect(() => {
    console.log("🚀 Setting up real-time subscriptions...");

    // Subscribe to scores table changes
    const scoresChannel = supabase
      .channel("scores-updates")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "scores" },
        (payload) => {
          console.log("📊 Scores table change detected:", payload);
          refreshScores();
        },
      )
      .subscribe();

    // Subscribe to contests table changes
    const contestsChannel = supabase
      .channel("contests-updates")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "contests" },
        (payload) => {
          console.log("🏆 Contests table change detected:", payload);
          refreshContests();
        },
      )
      .subscribe();

    console.log("✅ Real-time subscriptions active");

    // Cleanup subscriptions on unmount
    return () => {
      console.log("🧹 Cleaning up real-time subscriptions...");
      supabase.removeChannel(scoresChannel);
      supabase.removeChannel(contestsChannel);
      console.log("✅ Real-time subscriptions cleaned up");
    };
  }, []);

  // Calculate total Stableford scores
  const calculateTotalStableford = () => {
    const totals: { [key: string]: number } = {};

    players.forEach((player) => {
      let total = 0;

      // Scarecrow round
      if (scores.scarecrow[player]) {
        scores.scarecrow[player].forEach((strokes, index) => {
          total += calculateStablefordPoints(
            strokes,
            courseData.scarecrow.pars[index],
          );
        });
      }

      // Gamble Sands round
      if (scores.gambleSands[player]) {
        scores.gambleSands[player].forEach((strokes, index) => {
          total += calculateStablefordPoints(
            strokes,
            courseData.gambleSands.pars[index],
          );
        });
      }

      // Quicksands (team scores)
      const teamKey =
        player === "Ivan" || player === "Jack" ? "IG + JC" : "PT + MR";
      if (scores.quicksands[teamKey]) {
        scores.quicksands[teamKey].forEach((strokes, index) => {
          total += calculateStablefordPoints(
            strokes,
            courseData.quicksands.pars[index],
          );
        });
      }

      totals[player] = total;
    });

    return totals;
  };

  // Check if tournament is complete (all rounds have scores)
  const isTournamentComplete = () => {
    return (
      players.every(
        (player) =>
          scores.scarecrow[player] &&
          scores.scarecrow[player].every((score) => score !== null) &&
          scores.gambleSands[player] &&
          scores.gambleSands[player].every((score) => score !== null),
      ) &&
      scores.quicksands["IG + JC"] &&
      scores.quicksands["IG + JC"].every((score) => score !== null) &&
      scores.quicksands["PT + MR"] &&
      scores.quicksands["PT + MR"].every((score) => score !== null)
    );
  };

  // Check if we have any data at all
  const hasAnyData = () => {
    return (
      players.some(
        (player) =>
          (scores.scarecrow[player] &&
            scores.scarecrow[player].some((score) => score !== null)) ||
          (scores.gambleSands[player] &&
            scores.gambleSands[player].some((score) => score !== null)),
      ) ||
      (scores.quicksands["IG + JC"] &&
        scores.quicksands["IG + JC"].some((score) => score !== null)) ||
      (scores.quicksands["PT + MR"] &&
        scores.quicksands["PT + MR"].some((score) => score !== null)) ||
      Object.keys(contestWinners.scarecrow).length > 0 ||
      Object.keys(contestWinners.gambleSands).length > 0
    );
  };

  // Calculate money won
  const calculateMoneyWon = () => {
    const money: { [key: string]: number } = {};

    players.forEach((player) => {
      let total = 0;
      const initial = playerInitials[player];

      // Count contest wins ($10 each)
      Object.values(contestWinners.scarecrow).forEach((winner) => {
        if (winner === initial) total += 10;
      });
      Object.values(contestWinners.gambleSands).forEach((winner) => {
        if (winner === initial) total += 10;
      });

      money[player] = total;
    });

    // Add final prizes if tournament is complete
    if (isTournamentComplete()) {
      const sortedPlayers = Object.entries(stablefordTotals).sort(
        ([, a], [, b]) => b - a,
      );

      // Overall champion ($120)
      if (sortedPlayers[0]) {
        money[sortedPlayers[0][0]] += 120;
      }

      // Runner-up ($60)
      if (sortedPlayers[1]) {
        money[sortedPlayers[1][0]] += 60;
      }

      // Team champions ($25 each)
      // Determine winning team based on Quicksands scores
      const ivanJackScore =
        scores.quicksands["IG + JC"]?.reduce(
          (sum: number, score: number | null, index: number) =>
            sum +
            calculateStablefordPoints(score, courseData.quicksands.pars[index]),
          0,
        ) || 0;
      const patrickMarshallScore =
        scores.quicksands["PT + MR"]?.reduce(
          (sum: number, score: number | null, index: number) =>
            sum +
            calculateStablefordPoints(score, courseData.quicksands.pars[index]),
          0,
        ) || 0;

      if (ivanJackScore > patrickMarshallScore) {
        money["Ivan"] += 25;
        money["Jack"] += 25;
      } else if (patrickMarshallScore > ivanJackScore) {
        money["Patrick"] += 25;
        money["Marshall"] += 25;
      }
    }

    return money;
  };

  // Generate money earning descriptions
  const getMoneyEarningDescription = (player: string) => {
    const descriptions = [];
    const initial = playerInitials[player];

    // Contest wins by course
    const scarecrowWins = Object.entries(contestWinners.scarecrow)
      .filter(([_, winner]) => winner === initial)
      .map(([hole, _]) => hole);

    const gambleSandsWins = Object.entries(contestWinners.gambleSands)
      .filter(([_, winner]) => winner === initial)
      .map(([hole, _]) => hole);

    if (scarecrowWins.length > 0) {
      descriptions.push(`Scarecrow holes ${scarecrowWins.join(", ")}`);
    }

    if (gambleSandsWins.length > 0) {
      descriptions.push(`Gamble Sands holes ${gambleSandsWins.join(", ")}`);
    }

    // Tournament completion prizes
    if (isTournamentComplete()) {
      const sortedPlayers = Object.entries(stablefordTotals).sort(
        ([, a], [, b]) => b - a,
      );

      if (sortedPlayers[0] && sortedPlayers[0][0] === player) {
        descriptions.push("Overall Stableford champion");
      } else if (sortedPlayers[1] && sortedPlayers[1][0] === player) {
        descriptions.push("Overall Stableford runner-up");
      }

      // Team prizes
      const ivanJackScore =
        scores.quicksands["IG + JC"]?.reduce(
          (sum: number, score: number | null, index: number) =>
            sum +
            calculateStablefordPoints(score, courseData.quicksands.pars[index]),
          0,
        ) || 0;
      const patrickMarshallScore =
        scores.quicksands["PT + MR"]?.reduce(
          (sum: number, score: number | null, index: number) =>
            sum +
            calculateStablefordPoints(score, courseData.quicksands.pars[index]),
          0,
        ) || 0;

      if (
        ivanJackScore > patrickMarshallScore &&
        (player === "Ivan" || player === "Jack")
      ) {
        descriptions.push("Team Scramble champion");
      } else if (
        patrickMarshallScore > ivanJackScore &&
        (player === "Patrick" || player === "Marshall")
      ) {
        descriptions.push("Team Scramble champion");
      }
    }

    return descriptions.length > 0 ? descriptions.join(" • ") : "No prizes yet";
  };

  const stablefordTotals = calculateTotalStableford();
  const moneyTotals = calculateMoneyWon();
  const sortedByStableford = Object.entries(stablefordTotals).sort(
    ([, a], [, b]) => b - a,
  );

  const renderScorecard = (
    courseName: string,
    courseInfo: any,
    scores: any,
  ) => {
    const isTeamRound = courseName === "quicksands";
    const displayPlayers = isTeamRound ? ["IG + JC", "PT + MR"] : players;

    return (
      <Card className="border-golf-green/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-golf-green" />
            {courseInfo.name}
          </CardTitle>
          <CardDescription>
            {courseInfo.holes} holes •{" "}
            {isTeamRound ? "Team Scramble" : "Individual Stroke Play"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-golf-green/20">
                  <th className="text-left py-3 px-2 font-semibold min-w-[100px]">
                    Hole
                  </th>
                  {Array.from({ length: courseInfo.holes }, (_, i) => (
                    <th
                      key={i + 1}
                      className="text-center py-3 px-1 font-semibold w-10 h-10 min-w-[40px]"
                    >
                      {i + 1}
                    </th>
                  ))}
                  <th className="text-center py-3 px-2 font-semibold bg-golf-green/5 min-w-[60px]">
                    Total
                  </th>
                  <th className="text-center py-3 px-2 font-semibold bg-golf-green/10 min-w-[80px]">
                    Stableford
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-2 border-golf-green/20">
                  <td className="py-3 px-2 font-semibold text-golf-green-dark">
                    Par
                  </td>
                  {courseInfo.pars.map((par: number, index: number) => (
                    <td
                      key={index}
                      className="text-center py-3 px-1 bg-golf-green/5 w-10 h-10"
                    >
                      {par}
                    </td>
                  ))}
                  <td className="text-center py-3 px-2 bg-golf-green/10 font-semibold">
                    {courseInfo.pars.reduce(
                      (sum: number, par: number) => sum + par,
                      0,
                    )}
                  </td>
                  <td className="text-center py-3 px-2 bg-golf-green/20 font-semibold">
                    {courseInfo.pars.length * 2}
                  </td>
                </tr>

                {displayPlayers.map((player, playerIndex) => (
                  <tr
                    key={player}
                    className={`border-b border-golf-green/10 ${playerIndex % 2 === 0 ? "bg-gray-50/50" : "bg-white"}`}
                  >
                    <td className="py-3 px-2 font-semibold">{player}</td>
                    {scores[player]?.map(
                      (score: number | null, index: number) => (
                        <td
                          key={index}
                          className={`text-center py-3 px-1 w-10 h-10 ${getScoreIndicator(score, courseInfo.pars[index])}`}
                        >
                          <div className="flex items-center justify-center w-full h-full">
                            {score !== null ? score : ""}
                          </div>
                        </td>
                      ),
                    ) ||
                      Array.from({ length: courseInfo.holes }, (_, i) => (
                        <td
                          key={i}
                          className="text-center py-3 px-1 text-muted-foreground w-10 h-10"
                        >
                          <div className="flex items-center justify-center w-full h-full">
                            -
                          </div>
                        </td>
                      ))}
                    <td className="text-center py-3 px-2 bg-golf-green/5 font-semibold">
                      {scores[player]?.reduce(
                        (sum: number, score: number | null) =>
                          score !== null ? sum + score : sum,
                        0,
                      ) || "-"}
                    </td>
                    <td className="text-center py-3 px-2 bg-golf-green/10 font-semibold">
                      {scores[player]?.reduce(
                        (sum: number, score: number | null, index: number) =>
                          sum +
                          calculateStablefordPoints(
                            score,
                            courseInfo.pars[index],
                          ),
                        0,
                      ) || "-"}
                    </td>
                  </tr>
                ))}

                <tr className="border-b border-golf-green/10">
                  <td className="py-3 px-2 font-semibold text-golf-green-dark">
                    Contest
                  </td>
                  {Array.from({ length: courseInfo.holes }, (_, index) => {
                    const holeNum = index + 1;
                    const contestType = courseInfo.contestHoles[holeNum];
                    const winner = contestWinners[courseName]?.[holeNum];

                    return (
                      <td
                        key={index}
                        className="text-center py-3 px-1 bg-yellow-50 w-10 h-10"
                      >
                        {contestType && winner ? (
                          <Badge
                            variant="secondary"
                            className="text-xs bg-golf-green/10 text-golf-green-dark"
                          >
                            {winner}
                          </Badge>
                        ) : contestType ? (
                          <span className="text-xs text-muted-foreground">
                            {contestType === "closest" ? "����" : "🏌"}
                          </span>
                        ) : (
                          "-"
                        )}
                      </td>
                    );
                  })}
                  <td className="text-center py-3 px-2 bg-golf-green/5"></td>
                  <td className="text-center py-3 px-2 bg-golf-green/10"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-golf-green/5 via-background to-golf-sand/10">
      <Navigation />

      {/* Header */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-golf-green text-white">
            Tournament Leaderboard
          </Badge>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-golf-green-dark mb-6">
            Live Scoring
            <span className="block text-golf-green text-2xl sm:text-3xl md:text-4xl mt-2">
              & Prize Tracker
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Track scorecards, Stableford points, and prize money across all
            three rounds
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <div className="animate-spin h-8 w-8 border-b-2 border-golf-green mx-auto mb-4"></div>
                <p className="text-muted-foreground">
                  Loading tournament data...
                </p>
              </div>
            </div>
          ) : error ? (
            <div className="flex items-center justify-center py-12">
              <Card
                className={`max-w-2xl ${error.includes("Database setup required") ? "border-yellow-200 bg-yellow-50" : "border-red-200 bg-red-50"}`}
              >
                <CardContent className="p-6">
                  <div
                    className={`${error.includes("Database setup required") ? "text-yellow-600" : "text-red-600"} mb-2 text-center font-semibold`}
                  >
                    {error.includes("Database setup required")
                      ? "⚙️ Setup Required"
                      : "⚠️ Error"}
                  </div>
                  <p
                    className={`${error.includes("Database setup required") ? "text-yellow-800" : "text-red-800"} mb-4`}
                  >
                    {error}
                  </p>

                  {error.includes("Database setup required") && (
                    <div className="mt-4 p-4 bg-white rounded border">
                      <h4 className="font-semibold mb-2">
                        Quick Setup Instructions:
                      </h4>
                      <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
                        <li>
                          Go to your{" "}
                          <a
                            href="https://eunomxuabzzfualvhrxm.supabase.co/project/default/sql"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            Supabase SQL Editor
                          </a>
                        </li>
                        <li>
                          Copy and run the SQL from{" "}
                          <code className="bg-gray-100 px-1 rounded">
                            supabase-setup.sql
                          </code>{" "}
                          file
                        </li>
                        <li>
                          This will create the required{" "}
                          <code className="bg-gray-100 px-1 rounded">
                            scores
                          </code>{" "}
                          and{" "}
                          <code className="bg-gray-100 px-1 rounded">
                            contests
                          </code>{" "}
                          tables
                        </li>
                        <li>Refresh this page to see live tournament data</li>
                      </ol>
                    </div>
                  )}

                  <div className="mt-4 space-x-2 text-center">
                    <button
                      onClick={() => window.location.reload()}
                      className={`px-4 py-2 text-white rounded transition-colors ${
                        error.includes("Database setup required")
                          ? "bg-yellow-600 hover:bg-yellow-700"
                          : "bg-red-600 hover:bg-red-700"
                      }`}
                    >
                      Reload Page
                    </button>
                    <button
                      onClick={() => {
                        setError(null);
                        setLoading(true);
                        window.location.hash = "#retry-" + Date.now();
                        setTimeout(() => window.location.reload(), 100);
                      }}
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                    >
                      Try Again
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : !hasAnyData() ? (
            <div className="flex items-center justify-center py-12">
              <Card className="border-blue-200 bg-blue-50 max-w-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-blue-600 mb-2">⛳ Tournament Ready</div>
                  <h3 className="font-semibold text-blue-800 mb-2">
                    No Tournament Data Yet
                  </h3>
                  <p className="text-blue-700 text-sm mb-4">
                    The leaderboard is connected and ready! Start entering
                    scores and contest results to see live tournament data.
                  </p>
                  <div className="text-xs text-blue-600 mb-4">
                    <p>✓ Database tables are set up correctly</p>
                    <p>✓ Real-time updates enabled</p>
                  </div>
                  <a
                    href="https://scores.foretheboy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-blue-600 transition-colors underline"
                  >
                    Admin
                  </a>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="w-full">
              {/* Custom Tab Navigation */}
              <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground grid w-full grid-cols-3 mb-8">
                <button
                  onClick={() => setActiveTab("stableford")}
                  className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2 ${
                    activeTab === "stableford"
                      ? "bg-background text-foreground shadow-sm"
                      : ""
                  }`}
                >
                  <Trophy className="h-4 w-4" />
                  <span className="hidden sm:inline">Stableford Board</span>
                  <span className="sm:hidden">Points</span>
                </button>
                <button
                  onClick={() => setActiveTab("money")}
                  className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2 ${
                    activeTab === "money"
                      ? "bg-background text-foreground shadow-sm"
                      : ""
                  }`}
                >
                  <DollarSign className="h-4 w-4" />
                  <span className="hidden sm:inline">Money Board</span>
                  <span className="sm:hidden">Money</span>
                </button>
                <button
                  onClick={() => setActiveTab("scorecards")}
                  className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2 ${
                    activeTab === "scorecards"
                      ? "bg-background text-foreground shadow-sm"
                      : ""
                  }`}
                >
                  <Calculator className="h-4 w-4" />
                  <span className="hidden sm:inline">Raw Scorecards</span>
                  <span className="sm:hidden">Scores</span>
                </button>
              </div>

              {/* Stableford Leaderboard Tab */}
              {activeTab === "stableford" && (
                <div className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  <Card className="border-golf-green/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Trophy className="h-5 w-5 text-golf-green" />
                        Overall Stableford Leaderboard
                      </CardTitle>
                      <CardDescription>
                        Combined points from all rounds (individual + team)
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {sortedByStableford.map(([player, points], index) => (
                          <div
                            key={player}
                            className={`flex items-center justify-between p-4 rounded-lg border ${
                              index === 0
                                ? "bg-yellow-50 border-yellow-200"
                                : index === 1
                                  ? "bg-gray-50 border-gray-200"
                                  : "bg-white border-golf-green/20"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-golf-green/10 text-golf-green-dark font-bold">
                                {index + 1}
                              </div>
                              <div>
                                <h3 className="font-semibold text-golf-green-dark">
                                  {player}
                                </h3>
                                {index === 0 && (
                                  <Badge className="bg-yellow-500 text-white">
                                    Current Leader
                                  </Badge>
                                )}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-golf-green-dark">
                                {points}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                points
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Team Scramble Scores Section */}
                      <div className="mt-8">
                        <h3 className="text-lg font-semibold text-golf-green-dark mb-4 flex items-center gap-2">
                          <Users className="h-5 w-5 text-golf-green" />
                          Team Scramble Scores
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {Object.entries(scores.quicksands).map(
                            ([teamName, teamScores]) => {
                              const teamScore =
                                teamScores?.reduce(
                                  (
                                    sum: number,
                                    score: number | null,
                                    index: number,
                                  ) =>
                                    sum +
                                    calculateStablefordPoints(
                                      score,
                                      courseData.quicksands.pars[index],
                                    ),
                                  0,
                                ) || 0;

                              return (
                                <Card
                                  key={teamName}
                                  className="border-golf-green/20 bg-white"
                                >
                                  <CardContent className="p-4">
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center gap-3">
                                        <Users className="h-5 w-5 text-golf-green" />
                                        <h4 className="font-semibold text-golf-green-dark">
                                          {teamName}
                                        </h4>
                                      </div>
                                      <div className="text-right">
                                        <div className="text-xl font-bold text-golf-green-dark">
                                          {teamScore}
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                          Quicksands points
                                        </div>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              );
                            },
                          )}
                        </div>
                      </div>

                      <div className="mt-8 p-6 bg-golf-green/5 rounded-lg">
                        <h3 className="text-lg font-semibold text-golf-green-dark mb-4 flex items-center gap-2">
                          <Calculator className="h-5 w-5" />
                          Prize Structure (Final)
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span>🥇 Overall Champion:</span>
                              <span className="font-semibold">$120</span>
                            </div>
                            <div className="flex justify-between">
                              <span>🥈 Runner-up:</span>
                              <span className="font-semibold">$60</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span>🏆 Team Champions:</span>
                              <span className="font-semibold">$25 each</span>
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Awarded after all rounds complete
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Money Leaderboard Tab */}
              {activeTab === "money" && (
                <div className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  <Card className="border-golf-green/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-golf-green" />
                        Money Earned
                      </CardTitle>
                      <CardDescription>
                        {isTournamentComplete()
                          ? "Total prize money earned"
                          : "Current winnings from skills contests ($10 each)"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {Object.entries(moneyTotals)
                          .sort(([, a], [, b]) => b - a)
                          .map(([player, money]) => (
                            <div
                              key={player}
                              className="flex items-center justify-between p-4 rounded-lg border bg-white border-golf-green/20"
                            >
                              <div className="flex items-center gap-3">
                                <Target className="h-6 w-6 text-golf-green" />
                                <div>
                                  <h3 className="font-semibold text-golf-green-dark">
                                    {player}
                                  </h3>
                                  <p className="text-xs text-muted-foreground mt-1">
                                    {getMoneyEarningDescription(player)}
                                  </p>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-golf-green-dark">
                                  ${money}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  {isTournamentComplete()
                                    ? "Contest wins + tournament prizes"
                                    : money > 0
                                      ? `${Math.floor(money / 10)} contests won`
                                      : "No contests won yet"}
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>

                      <div className="mt-8 grid md:grid-cols-2 gap-6">
                        <Card className="border-golf-green/20 bg-white">
                          <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                              <Target className="h-5 w-5 text-golf-green" />
                              Skills Contests
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>🎯 Closest to Pin:</span>
                              <span>$10 per hole</span>
                            </div>
                            <div className="flex justify-between">
                              <span>🏌️ Long Drive:</span>
                              <span>$10 per hole</span>
                            </div>
                            <div className="text-xs text-muted-foreground mt-2">
                              Must land on green (CTP) or in fairway (LD) to win
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-golf-green/20 bg-golf-green/5">
                          <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                              <Medal className="h-5 w-5 text-golf-green" />
                              Final Prizes
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2 text-sm">
                            <div className="text-xs text-muted-foreground mb-2">
                              Awarded after tournament completion:
                            </div>
                            <div className="flex justify-between">
                              <span>Overall Winner:</span>
                              <span className="font-semibold">$120</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Overall Runner-up:</span>
                              <span className="font-semibold">$60</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Team Champions:</span>
                              <span className="font-semibold">$25 each</span>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Raw Scorecards Tab */}
              {activeTab === "scorecards" && (
                <div className="space-y-6 mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  {renderScorecard(
                    "scarecrow",
                    courseData.scarecrow,
                    scores.scarecrow,
                  )}
                  {renderScorecard(
                    "gambleSands",
                    courseData.gambleSands,
                    scores.gambleSands,
                  )}
                  {renderScorecard(
                    "quicksands",
                    courseData.quicksands,
                    scores.quicksands,
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-golf-green/10 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground text-center sm:text-left">
              <p>Live tournament data powered by Supabase</p>
            </div>
            <a
              href="https://scores.foretheboy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-golf-green transition-colors"
            >
              Admin
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
