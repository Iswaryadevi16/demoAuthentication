
// import { test, expect } from '@playwright/test';
// test('reservation',async({page})=>{
// await page.goto("http://localhost:3000/");
// await page.waitForTimeout(1000);
// await page.fill("//input[@id='customerName']","iswarya1");

// await page.click("//select[@id='roomNumber']");
// // await page.waitForTimeout(1000);
// // await page.click("//option[text()='Deluxe Room (101)']");
// // await page.fill('#checkout',"123123123");
// // await page.click('#booknow');


// })
// import { test, expect } from '@playwright/test';

// test('Dropdown selection using XPath', async ({ page }) => {
//   await page.goto('http://localhost:3000');

//   // Fill full name field
//   await page.fill("//input[@id='customerName']", 'Iswarya');
//   await page.waitForTimeout(1000);

//   // Select dropdown value using XPath
//   await page.selectOption("//select[@name='roomNumber']", { label: 'Executive Suite (201)' });
// await page.waitForTimeout(1000);
//   // Assert the selected value
//   const selected = await page.locator("//select[@name='roomNumber']").inputValue();
//   expect(selected).toBe('201');  // or 'Executive Suite (201)' depending on logic
// await page.waitForTimeout(1000);
//   // Optionally continue form


//    await page.fill("//input[@id='checkInDate']", '2025-07-01');

  
//   await page.fill("//input[@id='checkOutDate']", '2025-07-05');
// await page.waitForTimeout(1000);
  
//   const checkIn = await page.inputValue("//input[@id='checkInDate']");
//   const checkOut = await page.inputValue("//input[@id='checkOutDate']");
//   expect(checkIn).toBe('2025-07-01');
//   expect(checkOut).toBe('2025-07-05');
// await page.waitForTimeout(1000);
//   // Optional: Click submit button
//   await page.click("//button[text()='Book Now']");
// });
// import { test, expect } from '@playwright/test';

// test('signup_Function', async ({ page }) => {
  
//   await page.goto("http://localhost:3000/");
 
//   await page.waitForTimeout(3000);

//   await expect(page).toHaveTitle('Hospitality');

// await page.mouse.click(1340, 50); 
  
//   await page.waitForTimeout(1000);


// await page.click("//button[text()='Login']");
//  await page.waitForTimeout(2000);
// await page.click("//a[text()='Register']");
// await expect(page).toHaveTitle('Sign in to HotelRealm');

// const usernamefield = await page.fill("//input[@id='username']", 'iswarya1');

// await page.fill("//input[@id='password']",'123123123');

// await page.click("(//button[@aria-label='Show password'])[1]");

// await page.fill("//input[@name='password-confirm']",'123123123');
//   await page.waitForTimeout(3000);

// // await page.click("(//button[@aria-label='Show password'])[2]");

// await page.fill("//input[@name='email']",'ishudinesh1612@gmail.com');

// await page.fill("//input[@name='firstName']",'iswarya');

// await page.fill("//input[@name='lastName']",'D');
//   await page.waitForTimeout(3000);

// await page.click("//input[@type='submit']");

//  await page.waitForTimeout(3000);

// }),
// test('signIn_Function',async({page})=>{
// await page.goto("http://localhost:3000/");
// await page.waitForTimeout(1000);
// await page.click("//button[text()='Login']");
// await page.waitForTimeout(1000);
// await page.fill("//input[@id='username']","iswarya1");
// await page.fill("//input[@id='password']","123123123");
// await page.click("//input[@id='rememberMe']");
// await page.waitForTimeout(1000);
// await page.click("//button[@name='login']");

// }),

// test('forgot_Password',async({page})=>{
//    await page.goto("http://localhost:8080/realms/HotelRealm/protocol/openid-connect/auth?client_id=react-client&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&state=566a5769-ca2b-45d1-b227-00b3816e9e49&response_mode=fragment&response_type=code&scope=openid&nonce=d36dcd85-6944-41d1-bd81-d11c848bab72&code_challenge=4_uIsv7agspyx4E8m7agNpe8krjY6a-GIPsNJs6riKc&code_challenge_method=S256")
// await page.waitForTimeout(3000);
// await page.click("//a[text()='Forgot Password?']");
// // const fgPass = await page.locator("//a[text()='Forgot Password?']").isVisible();
// // console.log('forgot Password is visible', fgPass);

// await page.waitForTimeout(3000);
// await page.fill("//input[@id='username']","iswarya1");
// await page.click("//button[@type='submit']");
// await page.waitForTimeout(1000);
// const text = await page.locator("//p[contains(text(), 'Failed')]").textContent();
// console.log('The extracted text is:', text);

// //await page.click("//a[text()='« Back to Login']");
// await page.waitForTimeout(1000);
// }),


//  test('reservation',async({page})=>{

// await page.goto('http://localhost:3000');
// await page.waitForTimeout(1000);
// await page.fill("//input[@id='customerName']", 'Iswarya');
//   await page.waitForTimeout(1000);

// await page.selectOption("//select[@name='roomNumber']", { label: 'Executive Suite (201)' });
// await page.waitForTimeout(1000);


// const selected = await page.locator("//select[@name='roomNumber']").inputValue();
//   expect(selected).toBe('201');  
// await page.waitForTimeout(1000);

// await page.fill("//input[@id='checkInDate']", '2025-07-01');
// await page.fill("//input[@id='checkOutDate']", '2025-07-05');
// await page.waitForTimeout(1000);

// const checkIn = await page.inputValue("//input[@id='checkInDate']");
//   const checkOut = await page.inputValue("//input[@id='checkOutDate']");
//   expect(checkIn).toBe('2025-07-01');
//   expect(checkOut).toBe('2025-07-05');

// await page.waitForTimeout(1000);

// await page.click("//button[text()='Book Now']");


//  })

import { test, expect } from '@playwright/test';
test('logout_function',async({page})=>{
await page.goto("http://localhost:3000/");
await page.waitForTimeout(1000);
await page.click("//button[text()='Login']");
await page.waitForTimeout(1000);
await page.fill("//input[@id='username']","iswarya1");
await page.fill("//input[@id='password']","123123123");
await page.click("//input[@id='rememberMe']");
await page.waitForTimeout(1000);
await page.click("//button[@name='login']");
await page.click("//button[@class='dropdown-toggle']");
await page.click("//button[text()=' Logout']");

})