



// async function getContent(){

//     filepath= $('./test/input/word.pdf');
//     let a=await pdf.getContent(filepath);
//     console.log(a);

// }
module.exports= new getContent();

// module.exports = function data(filePath) {
//     return new Promise((resolve) => {
//         pdf(filePath).then(function (data) {
//             resolve(data.text);
//             console.log(data.text);
//         });
//     });
// };
// });
// });

    // it("pdf read",async()=>{



    //     module.exports = function data(filePath) {
    //       return new Promise((resolve) => {
    //         pdf(filePath).then(function(data) {
    //           resolve(data.text)
    //         })
    //       })
    //     })
        

//});



/*
    // direct xpath
    $('//input[@name="username"]').setValue("Admin");
    await browser.waitUntil();
    await $('//input[@name="password"]').setValue("admin123");
    await $('button[type="submit"]').click();

    // using driver object
    await browser.$('//input[@name="username"]').setValue("Admin");
    await browser.$('//input[@name="password"]').setValue("admin123");
    await browser.$('button[type="submit"]').click();

    // using pageobject
    await loginPage.username.setValue("Admin");
    await loginPage.password.setValue("admin123");
    await loginPage.submitButton.click();*/