// @ts-check
import { tanstackConfig } from "@tanstack/eslint-config"

const rules = {
  quotes: ["error", "double"],
} 

export default [...tanstackConfig, { rules }]
