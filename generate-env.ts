import * as dotenv from "dotenv";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import { dirname, resolve } from "path";

const { parsed } = dotenv.config();
const targetPath = resolve("./src/env.ts");
const dir = dirname(targetPath);
const envFile = `export const environment = {
    production: ${process.env["NODE_ENV"] === "production" ? "true" : "false"},
${Object.entries(parsed ?? {})
    .map(([key, value]) => {
        const parseValue = (value: string) => {
            const lower = value.toLowerCase();
            if (lower === "true") return true;
            if (lower === "false") return false;
            if (!isNaN(Number(value)) && value.trim() !== "") return Number(value);
            return `"${value.replace(/'/g, "\\'")}"`;
        };

        return `    ${key}: ${parseValue(value)},`;
    })
    .join("\n")}
};`;

if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
writeFileSync(targetPath, envFile);
