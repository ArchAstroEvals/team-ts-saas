import { expect, test } from "@playwright/test";

test("home shows hero", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Acme SaaS" })).toBeVisible();
});
