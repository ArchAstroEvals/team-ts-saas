import { expect, test } from "@playwright/test";

test("signup confirms email", async ({ page }) => {
  await page.goto("/signup");
  await page.getByPlaceholder("you@team.co").fill("sam@team.co");
  await page.getByRole("button", { name: "Create account" }).click();
  await expect(page.getByText("Check your inbox")).toBeVisible();
});
