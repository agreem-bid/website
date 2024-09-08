"use client";

import * as React from "react";
import { Label, Pie, PieChart, ResponsiveContainer } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description =
  "Wykres kołowy przedstawiający alokację tokenów platformy.";

const chartData = [
  { allocation: "Airdropy: ", tokens: 300000, fill: "#FF6B6B" }, // 30%
  { allocation: "Rozwój: ", tokens: 250000, fill: "#4D96FF" }, // 25%
  { allocation: "Community: ", tokens: 200000, fill: "#42FFB3" }, // 20%
  { allocation: "Smart kontrakt na start: ", tokens: 150000, fill: "#FFD700" }, // 15%
  { allocation: "Rezerwa: ", tokens: 100000, fill: "#D66BFF" }, // 10%
];

const chartConfig = {
  tokens: {
    label: "Tokeny",
  },
  airdropy: {
    label: "Airdropy",
    color: "hsl(var(--chart-1))",
  },
  rozwój: {
    label: "Rozwój",
    color: "hsl(var(--chart-2))",
  },
  community: {
    label: "Community",
    color: "hsl(var(--chart-3))",
  },
  smartContract: {
    label: "Smart kontrakt na start",
    color: "hsl(var(--chart-4))",
  },
  rezerwa: {
    label: "Rezerwa",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function TokenomicsChart() {
  const totalTokens = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.tokens, 0);
  }, []);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Tokenomia Protokołu</CardTitle>
        <CardDescription>Podział alokacji 1,000,000 tokenów</CardDescription>
      </CardHeader>
      <div className="block md:flex md:mx-auto">
        <CardContent className="flex-1 pb-0">
          <ResponsiveContainer width="100%" height={300} minWidth={200}>
            <ChartContainer
              config={chartConfig}
              className="mx-auto md:m-0 aspect-square max-h-[250px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={chartData}
                  dataKey="tokens"
                  nameKey="allocation"
                  innerRadius={60}
                  strokeWidth={5}
                >
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-3xl font-bold dark:fill-white"
                            >
                              Podział
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground dark:fill-white"
                            >
                              Tokenów
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </ResponsiveContainer>
        </CardContent>

        <CardFooter className="block text-sm md:justify-start md:flex md:align-middle m-4">
          <div className="mt-4 block flex-wrap">
            {chartData.map((item) => (
              <div
                key={item.allocation}
                className="flex items-center gap-2 my-1"
              >
                <span
                  className="inline-block w-4 h-4 rounded-full"
                  style={{ backgroundColor: item.fill }}
                ></span>
                <span>
                  {item.allocation}{" "}
                  {((item.tokens / totalTokens) * 100).toFixed(0)}%
                </span>
              </div>
            ))}
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}
