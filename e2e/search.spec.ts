import { test, expect } from '@playwright/test'

test.describe('SearchComponent', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('der Search-Button löst die Suche aus', async ({ page }) => {
    // useSearch wartet 5 s + MockDataService 5 s → genug Puffer einplanen
    test.setTimeout(30_000)

    const input = page.getByPlaceholder('Enter a search term')
    const button = page.getByRole('button', { name: 'Search' })

    // ohne Suchbegriff ist der Button deaktiviert
    await expect(button).toBeDisabled()

    await input.fill('Bericht')
    await expect(button).toBeEnabled()

    // search() in useSearch loggt den Suchbegriff → direkter Beweis, dass sie aufgerufen wurde
    const searchLog = page.waitForEvent('console', (msg) =>
      msg.text().includes('[useSearch] search term Bericht'),
    )

    await button.click()
    await searchLog

    // Info-Dialog aus onSearch schließen
    const dialog = page.getByRole('dialog')
    await expect(dialog).toContainText('Searching by short name is the only option supported')
    await dialog.getByRole('button', { name: 'OK' }).click()

    // Ladezustand wird angezeigt …
    await expect(page.getByText('Searching…')).toBeVisible()

    // … und danach erscheinen Ergebnisse in der Tabelle
    await expect(page.locator('.el-table__body tr').first()).toBeVisible({ timeout: 15_000 })
    await expect(page.getByText('Searching…')).toBeHidden()
  })

  test('das Kreuz im Input-Feld löscht den Suchbegriff', async ({ page }) => {
    const input = page.getByPlaceholder('Enter a search term')
    const button = page.getByRole('button', { name: 'Search' })

    await input.fill('IBM')
    await expect(input).toHaveValue('IBM')

    // das Clear-Icon von el-input erscheint erst bei Hover/Fokus
    await input.hover()
    const clearIcon = page.locator('.search-bar__input .el-input__clear')
    await expect(clearIcon).toBeVisible()
    await clearIcon.click()

    await expect(input).toHaveValue('')
    await expect(button).toBeDisabled()
  })
})
