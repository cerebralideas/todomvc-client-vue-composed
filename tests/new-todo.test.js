const { chromium } = require('playwright');

test('Load app and add new todo', async (done) => {
    // Load up app
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage('http://localhost:8000');

    // Ensure #newTodo is rendered and enter new todo
    const newTodoInput = await page.waitForSelector('#newTodo');
    await newTodoInput.type('My new todo item!');
    await newTodoInput.press('Enter');

    // Grab all .view elements which represent todos
    const newTodo = await page.waitForSelector('.view');

    // Grab the last todo in the list (newest)
    const newTodoLabelEl = await newTodo.$('label');
    const newTodoLabel = await newTodoLabelEl.evaluate((node) => node.innerText);
    expect(newTodoLabel).toBe('My new todo item!');

    // Close everything out
    await browser.close();
    done();
});
