import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import Navigation from "@/components/Navigation";
import { Trophy, Target, DollarSign, Users, Calculator, Medal } from "lucide-react";

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

// Placeholder scores (replace with real data later)
const placeholderScores = {
  scarecrow: {
    Ivan: [4, 2, 6, 3, 4, 5, 3, 5, 3, 4, 5, 5, 4, 4, 4, 2, 4, 5],
    Patrick: [5, 3, 5, 4, 5, 6, 4, 4, 2, 3, 4, 6, 5, 3, 5, 3, 5, 4],
    Jack: [3, 4, 5, 2, 3, 4, 5, 4, 4, 5, 4, 5, 3, 5, 6, 4, 3, 4],
    Marshall: [4, 3, 7, 3, 4, 5, 4, 5, 3, 4, 3, 4, 4, 4, 5, 3, 4, 5],
  },
  gambleSands: {
    Ivan: [4, 3, 4, 2, 4, 2, 5, 4, 3, 3, 5, 4, 6, 4, 5, 4, 4, 5],
    Patrick: [5, 4, 5, 3, 5, 3, 6, 3, 4, 4, 4, 5, 5, 3, 4, 2, 5, 6],
    Jack: [3, 4, 6, 3, 3, 4, 4, 5, 4, 2, 4, 3, 5, 5, 4, 3, 3, 4],
    Marshall: [4, 5, 5, 3, 4, 3, 5, 4, 5, 3, 4, 4, 4, 4, 5, 3, 4, 5],
  },
  quicksands: {
    "Ivan + Jack": [2, 3, 2, 3, 2, 2, 3, 2, 3, 2, 3, 2, 2, 3],
    "Patrick + Marshall": [3, 2, 3, 2, 3, 3, 2, 3, 2, 3, 2, 3, 3, 2],
  },
};

// Placeholder contest winners
const contestWinners = {
  scarecrow: { 2: "I", 3: "P", 4: "J", 6: "M", 9: "I", 11: "P", 12: "J", 15: "M", 16: "I" },
  gambleSands: { 3: "P", 4: "I", 6: "J", 7: "M", 10: "I", 13: "P", 16: "J", 18: "M" },
  quicksands: {},
};

// Calculate Stableford points
const calculateStablefordPoints = (strokes: number, par: number): number => {
  const diff = strokes - par;
  if (diff <= -2) return 8;
  if (diff === -1) return 4;
  if (diff === 0) return 2;
  if (diff === 1) return 1;
  return 0;
};

// Get visual indicator styling for score
const getScoreIndicator = (score: number, par: number) => {
  const diff = score - par;

  if (diff <= -2) {
    // Eagle: two concentric circles
    return "relative before:absolute before:inset-0 before:border-2 before:border-yellow-500 before:rounded-full after:absolute after:inset-1 after:border-2 after:border-yellow-500 after:rounded-full";
  } else if (diff === -1) {
    // Birdie: one circle
    return "relative before:absolute before:inset-0 before:border-2 before:border-green-500 before:rounded-full";
  } else if (diff === 1) {
    // Bogey: one square
    return "relative before:absolute before:inset-0 before:border-2 before:border-orange-500";
  } else if (diff >= 2) {
    // Double Bogey+: two nested squares
    return "relative before:absolute before:inset-0 before:border-2 before:border-red-500 after:absolute after:inset-1 after:border-2 after:border-red-500";
  }

  return ""; // Par has no indicator
};

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState("stableford");

  // Calculate total Stableford scores
  const calculateTotalStableford = () => {
    const totals: { [key: string]: number } = {};
    
    players.forEach(player => {
      let total = 0;
      
      // Scarecrow round
      if (placeholderScores.scarecrow[player]) {
        placeholderScores.scarecrow[player].forEach((strokes, index) => {
          total += calculateStablefordPoints(strokes, courseData.scarecrow.pars[index]);
        });
      }
      
      // Gamble Sands round
      if (placeholderScores.gambleSands[player]) {
        placeholderScores.gambleSands[player].forEach((strokes, index) => {
          total += calculateStablefordPoints(strokes, courseData.gambleSands.pars[index]);
        });
      }
      
      // Quicksands (team scores)
      const teamKey = player === "Ivan" || player === "Jack" ? "Ivan + Jack" : "Patrick + Marshall";
      if (placeholderScores.quicksands[teamKey]) {
        placeholderScores.quicksands[teamKey].forEach((strokes, index) => {
          total += calculateStablefordPoints(strokes, courseData.quicksands.pars[index]);
        });
      }
      
      totals[player] = total;
    });
    
    return totals;
  };

  // Check if tournament is complete (all rounds have scores)
  const isTournamentComplete = () => {
    return players.every(player =>
      placeholderScores.scarecrow[player] &&
      placeholderScores.gambleSands[player]
    ) &&
    placeholderScores.quicksands["Ivan + Jack"] &&
    placeholderScores.quicksands["Patrick + Marshall"];
  };

  // Calculate money won
  const calculateMoneyWon = () => {
    const money: { [key: string]: number } = {};

    players.forEach(player => {
      let total = 0;
      const initial = playerInitials[player];

      // Count contest wins ($10 each)
      Object.values(contestWinners.scarecrow).forEach(winner => {
        if (winner === initial) total += 10;
      });
      Object.values(contestWinners.gambleSands).forEach(winner => {
        if (winner === initial) total += 10;
      });

      money[player] = total;
    });

    // Add final prizes if tournament is complete
    if (isTournamentComplete()) {
      const sortedPlayers = Object.entries(stablefordTotals).sort(([,a], [,b]) => b - a);

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
      const ivanJackScore = placeholderScores.quicksands["Ivan + Jack"]?.reduce((sum: number, score: number, index: number) =>
        sum + calculateStablefordPoints(score, courseData.quicksands.pars[index]), 0) || 0;
      const patrickMarshallScore = placeholderScores.quicksands["Patrick + Marshall"]?.reduce((sum: number, score: number, index: number) =>
        sum + calculateStablefordPoints(score, courseData.quicksands.pars[index]), 0) || 0;

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
      descriptions.push(`Scarecrow holes ${scarecrowWins.join(', ')}`);
    }

    if (gambleSandsWins.length > 0) {
      descriptions.push(`Gamble Sands holes ${gambleSandsWins.join(', ')}`);
    }

    // Tournament completion prizes
    if (isTournamentComplete()) {
      const sortedPlayers = Object.entries(stablefordTotals).sort(([,a], [,b]) => b - a);

      if (sortedPlayers[0] && sortedPlayers[0][0] === player) {
        descriptions.push("Overall Stableford champion");
      } else if (sortedPlayers[1] && sortedPlayers[1][0] === player) {
        descriptions.push("Overall Stableford runner-up");
      }

      // Team prizes
      const ivanJackScore = placeholderScores.quicksands["Ivan + Jack"]?.reduce((sum: number, score: number, index: number) =>
        sum + calculateStablefordPoints(score, courseData.quicksands.pars[index]), 0) || 0;
      const patrickMarshallScore = placeholderScores.quicksands["Patrick + Marshall"]?.reduce((sum: number, score: number, index: number) =>
        sum + calculateStablefordPoints(score, courseData.quicksands.pars[index]), 0) || 0;

      if (ivanJackScore > patrickMarshallScore && (player === "Ivan" || player === "Jack")) {
        descriptions.push("Team Scramble champion");
      } else if (patrickMarshallScore > ivanJackScore && (player === "Patrick" || player === "Marshall")) {
        descriptions.push("Team Scramble champion");
      }
    }

    return descriptions.length > 0 ? descriptions.join(' • ') : "No prizes yet";
  };

  const stablefordTotals = calculateTotalStableford();
  const moneyTotals = calculateMoneyWon();
  const sortedByStableford = Object.entries(stablefordTotals).sort(([,a], [,b]) => b - a);

  const renderScorecard = (courseName: string, courseInfo: any, scores: any) => {
    const isTeamRound = courseName === "quicksands";
    const displayPlayers = isTeamRound ? ["Ivan + Jack", "Patrick + Marshall"] : players;

    return (
      <Card className="border-golf-green/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-golf-green" />
            {courseInfo.name}
          </CardTitle>
          <CardDescription>
            {courseInfo.holes} holes • {isTeamRound ? "Team Scramble" : "Individual Stroke Play"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-golf-green/20">
                  <th className="text-left py-3 px-2 font-semibold min-w-[100px]">Hole</th>
                  {Array.from({ length: courseInfo.holes }, (_, i) => (
                    <th key={i + 1} className="text-center py-3 px-1 font-semibold w-10 h-10 min-w-[40px]">
                      {i + 1}
                    </th>
                  ))}
                  <th className="text-center py-3 px-2 font-semibold bg-golf-green/5 min-w-[60px]">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-golf-green/10">
                  <td className="py-2 px-1 font-semibold text-golf-green-dark">Par</td>
                  {courseInfo.pars.map((par: number, index: number) => (
                    <td key={index} className="text-center py-2 px-1 bg-golf-green/5">
                      {par}
                    </td>
                  ))}
                  <td className="text-center py-2 px-1 bg-golf-green/10 font-semibold">
                    {courseInfo.pars.reduce((sum: number, par: number) => sum + par, 0)}
                  </td>
                </tr>
                
                {displayPlayers.map((player, playerIndex) => (
                  <tr key={player} className={`border-b border-golf-green/10 ${playerIndex % 2 === 0 ? "bg-gray-50/50" : "bg-white"}`}>
                    <td className="py-2 px-1 font-semibold">{player}</td>
                    {scores[player]?.map((score: number, index: number) => (
                      <td key={index} className={`text-center py-2 px-1 ${getScoreIndicator(score, courseInfo.pars[index])}`}>
                        {score}
                      </td>
                    )) || Array.from({ length: courseInfo.holes }, (_, i) => (
                      <td key={i} className="text-center py-2 px-1 text-muted-foreground">-</td>
                    ))}
                    <td className="text-center py-2 px-1 bg-golf-green/5 font-semibold">
                      {scores[player]?.reduce((sum: number, score: number) => sum + score, 0) || "-"}
                    </td>
                  </tr>
                ))}
                
                <tr className="border-b border-golf-green/10">
                  <td className="py-2 px-1 font-semibold text-golf-green-dark">Contest</td>
                  {Array.from({ length: courseInfo.holes }, (_, index) => {
                    const holeNum = index + 1;
                    const contestType = courseInfo.contestHoles[holeNum];
                    const winner = contestWinners[courseName]?.[holeNum];
                    
                    return (
                      <td key={index} className="text-center py-2 px-1 bg-yellow-50">
                        {contestType && winner ? (
                          <Badge 
                            variant="secondary" 
                            className="text-xs bg-golf-green/10 text-golf-green-dark"
                          >
                            {winner}
                          </Badge>
                        ) : contestType ? (
                          <span className="text-xs text-muted-foreground">
                            {contestType === "closest" ? "🎯" : "🏌��"}
                          </span>
                        ) : (
                          "-"
                        )}
                      </td>
                    );
                  })}
                  <td className="text-center py-2 px-1 bg-golf-green/5"></td>
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
            Track scorecards, Stableford points, and prize money across all three rounds
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
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
                              <h3 className="font-semibold text-golf-green-dark">{player}</h3>
                              {index === 0 && (
                                <Badge className="bg-yellow-500 text-white">Current Leader</Badge>
                              )}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-golf-green-dark">{points}</div>
                            <div className="text-sm text-muted-foreground">points</div>
                          </div>
                        </div>
                      ))}
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
                      {isTournamentComplete() ? "Total prize money earned" : "Current winnings from skills contests ($10 each)"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {Object.entries(moneyTotals)
                        .sort(([,a], [,b]) => b - a)
                        .map(([player, money]) => (
                          <div
                            key={player}
                            className="flex items-center justify-between p-4 rounded-lg border bg-white border-golf-green/20"
                          >
                            <div className="flex items-center gap-3">
                              <Target className="h-6 w-6 text-golf-green" />
                              <h3 className="font-semibold text-golf-green-dark">{player}</h3>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-golf-green-dark">${money}</div>
                              <div className="text-sm text-muted-foreground">
                                {isTournamentComplete()
                                  ? "Contest wins + tournament prizes"
                                  : money > 0
                                    ? `${Math.floor(money / 10)} contests won`
                                    : "No contests won yet"
                                }
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
                {renderScorecard("scarecrow", courseData.scarecrow, placeholderScores.scarecrow)}
                {renderScorecard("gambleSands", courseData.gambleSands, placeholderScores.gambleSands)}
                {renderScorecard("quicksands", courseData.quicksands, placeholderScores.quicksands)}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
