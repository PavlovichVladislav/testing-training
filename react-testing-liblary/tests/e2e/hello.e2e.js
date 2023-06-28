const E2ETestPage = require("../pages/e2etest.page");

describe("My E2ETest page", () => {
   it("should toggle h1", async () => {
      await E2ETestPage.open();

      await E2ETestPage.toggleTitle("hello");
      await expect(E2ETestPage.title).toBeExisting();

      await E2ETestPage.toggleBtn.click();
      await expect(E2ETestPage.title).not.toBeExisting();
   });

   it("should not toggle h1", async () => {
    await E2ETestPage.open();

    await E2ETestPage.toggleTitle("bye");
    await expect(E2ETestPage.title).not.toBeExisting();

    await E2ETestPage.toggleBtn.click();
    await expect(E2ETestPage.title).not.toBeExisting();
 });
});
