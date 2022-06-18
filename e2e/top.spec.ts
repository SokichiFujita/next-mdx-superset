import { test, expect } from "@playwright/test";

test("should navigate to the top page", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.click("text=next-mdx-superset");
  await expect(page).toHaveURL("http://localhost:3000");
});

test("should page has title of post", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await expect(page.locator("data-testid=post_title >> nth=0")).toContainText(
    "Hello MDX"
  );
  await expect(page.locator("data-testid=post_title >> nth=2")).toContainText(
    "Hello MDX"
  );
});
