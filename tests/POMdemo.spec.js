
const { test, expect } = require('@playwright/test');
import { loginpage } from '../pages/loginpages';

import fs from 'fs';
import { parse } from 'csv-parse/sync';

const records = parse(fs.readFileSync('tests/datasheet/testdata.csv'), {
    columns: true,
    skip_empty_lines: true
})

for (const record of records) {
    test('First pom test' + record.id, async ({ page }) => {

        const login = new loginpage(page);
        await login.gotologinpage();
        await login.login(record.username, record.password);
        await page.waitForTimeout(4000);

    })
};

