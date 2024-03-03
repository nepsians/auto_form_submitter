import puppeteer from 'puppeteer';

const xpath = 'xpath/';

function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

(async () => {
    const gender = {
        0: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[1]/div/div/div[2]/div/div/span/div/div[1]/label',
        1: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[1]/div/div/div[2]/div/div/span/div/div[2]/label'
    }
    const age = {
        0: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[2]/div/div/div[2]/div/div/span/div/div[2]', //18
        1: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[2]/div/div/div[2]/div/div/span/div/div[3]',  //36
        2: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[2]/div/div/div[2]/div/div/span/div/div[4]'  //45
    }

    const academic = {
        0: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[3]/div/div/div[2]/div/div/span/div/div[3]', //bach
        1: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[3]/div/div/div[2]/div/div/span/div/div[4]'  //mast
    }

    const occupation = {
        0: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[4]/div/div/div[2]/div/div/span/div/div[3]', //emp
        1: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[4]/div/div/div[2]/div/div/span/div/div[4]' //self
    }

    const btn = '//*[@id="mG61Hd"]/div[2]/div/div[3]/div/div[1]/div'

    const CD_1 = {
        1: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[2]/div/div/div[2]/div/div[1]/div/div[2]/span/div[3]',
        2: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[2]/div/div/div[2]/div/div[1]/div/div[2]/span/div[4]',
        3: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[2]/div/div/div[2]/div/div[1]/div/div[2]/span/div[5]',
        4: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[2]/div/div/div[2]/div/div[1]/div/div[2]/span/div[6]'
    }

    const CD_2 = {
        1: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[2]/div/div/div[2]/div/div[1]/div/div[4]/span/div[3]',
        2: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[2]/div/div/div[2]/div/div[1]/div/div[4]/span/div[4]',
        3: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[2]/div/div/div[2]/div/div[1]/div/div[4]/span/div[5]',
        4: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[2]/div/div/div[2]/div/div[1]/div/div[4]/span/div[6]'
    }

    const CD_3 = {
        1: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[2]/div/div/div[2]/div/div[1]/div/div[6]/span/div[3]',
        2: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[2]/div/div/div[2]/div/div[1]/div/div[6]/span/div[4]',
        3: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[2]/div/div/div[2]/div/div[1]/div/div[6]/span/div[5]',
        4: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[2]/div/div/div[2]/div/div[1]/div/div[6]/span/div[6]'
    }

    const CD_4 = {
        1: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[2]/div/div/div[2]/div/div[1]/div/div[8]/span/div[3]',
        2: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[2]/div/div/div[2]/div/div[1]/div/div[8]/span/div[4]',
        3: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[2]/div/div/div[2]/div/div[1]/div/div[8]/span/div[5]',
        4: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[2]/div/div/div[2]/div/div[1]/div/div[8]/span/div[6]'
    }

    const CD_5 = {
        1: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[2]/div/div/div[2]/div/div[1]/div/div[10]/span/div[3]',
        2: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[2]/div/div/div[2]/div/div[1]/div/div[10]/span/div[4]',
        3: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[2]/div/div/div[2]/div/div[1]/div/div[10]/span/div[5]',
        4: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[2]/div/div/div[2]/div/div[1]/div/div[10]/span/div[6]'
    }

    const TZ_1 = {
        1: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[3]/div/div/div[2]/div/div[1]/div/div[2]/span/div[3]',
        2: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[3]/div/div/div[2]/div/div[1]/div/div[2]/span/div[4]',
        3: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[3]/div/div/div[2]/div/div[1]/div/div[2]/span/div[5]',
        4: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[3]/div/div/div[2]/div/div[1]/div/div[2]/span/div[6]'
    }

    const TZ_2 = {
        1: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[3]/div/div/div[2]/div/div[1]/div/div[4]/span/div[3]',
        2: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[3]/div/div/div[2]/div/div[1]/div/div[4]/span/div[4]',
        3: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[3]/div/div/div[2]/div/div[1]/div/div[4]/span/div[5]',
        4: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[3]/div/div/div[2]/div/div[1]/div/div[4]/span/div[6]'
    }

    const TZ_3 = {
        1: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[3]/div/div/div[2]/div/div[1]/div/div[6]/span/div[3]',
        2: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[3]/div/div/div[2]/div/div[1]/div/div[6]/span/div[4]',
        3: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[3]/div/div/div[2]/div/div[1]/div/div[6]/span/div[5]',
        4: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[3]/div/div/div[2]/div/div[1]/div/div[6]/span/div[6]'
    }

    const TZ_4 = {
        1: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[3]/div/div/div[2]/div/div[1]/div/div[8]/span/div[3]',
        2: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[3]/div/div/div[2]/div/div[1]/div/div[8]/span/div[4]',
        3: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[3]/div/div/div[2]/div/div[1]/div/div[8]/span/div[5]',
        4: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[3]/div/div/div[2]/div/div[1]/div/div[8]/span/div[6]'
    }

    const TZ_5 = {
        1: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[3]/div/div/div[2]/div/div[1]/div/div[10]/span/div[3]',
        2: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[3]/div/div/div[2]/div/div[1]/div/div[10]/span/div[4]',
        3: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[3]/div/div/div[2]/div/div[1]/div/div[10]/span/div[5]',
        4: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[3]/div/div/div[2]/div/div[1]/div/div[10]/span/div[6]'
    }

    const CS_1 = {
        1: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[4]/div/div/div[2]/div/div[1]/div/div[2]/span/div[3]',
        2: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[4]/div/div/div[2]/div/div[1]/div/div[2]/span/div[4]',
        3: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[4]/div/div/div[2]/div/div[1]/div/div[2]/span/div[5]',
        4: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[4]/div/div/div[2]/div/div[1]/div/div[2]/span/div[6]'
    }

    const CS_2 = {
        1: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[4]/div/div/div[2]/div/div[1]/div/div[4]/span/div[3]',
        2: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[4]/div/div/div[2]/div/div[1]/div/div[4]/span/div[4]',
        3: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[4]/div/div/div[2]/div/div[1]/div/div[4]/span/div[5]',
        4: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[4]/div/div/div[2]/div/div[1]/div/div[4]/span/div[6]'
    }

    const CS_3 = {
        1: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[4]/div/div/div[2]/div/div[1]/div/div[6]/span/div[3]',
        2: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[4]/div/div/div[2]/div/div[1]/div/div[6]/span/div[4]',
        3: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[4]/div/div/div[2]/div/div[1]/div/div[6]/span/div[5]',
        4: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[4]/div/div/div[2]/div/div[1]/div/div[6]/span/div[6]'
    }

    const CS_4 = {
        1: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[4]/div/div/div[2]/div/div[1]/div/div[8]/span/div[3]',
        2: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[4]/div/div/div[2]/div/div[1]/div/div[8]/span/div[4]',
        3: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[4]/div/div/div[2]/div/div[1]/div/div[8]/span/div[5]',
        4: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[4]/div/div/div[2]/div/div[1]/div/div[8]/span/div[6]'
    }

    const CS_5 = {
        1: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[4]/div/div/div[2]/div/div[1]/div/div[10]/span/div[3]',
        2: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[4]/div/div/div[2]/div/div[1]/div/div[10]/span/div[4]',
        3: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[4]/div/div/div[2]/div/div[1]/div/div[10]/span/div[5]',
        4: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[4]/div/div/div[2]/div/div[1]/div/div[10]/span/div[6]'
    }

    const OP_1 = {
        1: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[5]/div/div/div[2]/div/div[1]/div/div[2]/span/div[3]',
        2: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[5]/div/div/div[2]/div/div[1]/div/div[2]/span/div[4]',
        3: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[5]/div/div/div[2]/div/div[1]/div/div[2]/span/div[5]',
        4: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[5]/div/div/div[2]/div/div[1]/div/div[2]/span/div[6]'
    }

    const OP_2 = {
        1: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[5]/div/div/div[2]/div/div[1]/div/div[4]/span/div[3]',
        2: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[5]/div/div/div[2]/div/div[1]/div/div[4]/span/div[4]',
        3: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[5]/div/div/div[2]/div/div[1]/div/div[4]/span/div[5]',
        4: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[5]/div/div/div[2]/div/div[1]/div/div[4]/span/div[6]'
    }

    const OP_3 = {
        1: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[5]/div/div/div[2]/div/div[1]/div/div[6]/span/div[3]',
        2: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[5]/div/div/div[2]/div/div[1]/div/div[6]/span/div[4]',
        3: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[5]/div/div/div[2]/div/div[1]/div/div[6]/span/div[5]',
        4: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[5]/div/div/div[2]/div/div[1]/div/div[6]/span/div[6]'
    }

    const OP_4 = {
        1: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[5]/div/div/div[2]/div/div[1]/div/div[8]/span/div[3]',
        2: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[5]/div/div/div[2]/div/div[1]/div/div[8]/span/div[4]',
        3: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[5]/div/div/div[2]/div/div[1]/div/div[8]/span/div[5]',
        4: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[5]/div/div/div[2]/div/div[1]/div/div[8]/span/div[6]'
    }

    const OP_5 = {
        1: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[5]/div/div/div[2]/div/div[1]/div/div[10]/span/div[3]',
        2: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[5]/div/div/div[2]/div/div[1]/div/div[10]/span/div[4]',
        3: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[5]/div/div/div[2]/div/div[1]/div/div[10]/span/div[5]',
        4: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[5]/div/div/div[2]/div/div[1]/div/div[10]/span/div[6]'
    }

    const TI_1 = {
        1: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[6]/div/div/div[2]/div/div[1]/div/div[2]/span/div[3]',
        2: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[6]/div/div/div[2]/div/div[1]/div/div[2]/span/div[4]',
        3: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[6]/div/div/div[2]/div/div[1]/div/div[2]/span/div[5]',
        4: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[6]/div/div/div[2]/div/div[1]/div/div[2]/span/div[6]'
    }

    const TI_2 = {
        1: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[6]/div/div/div[2]/div/div[1]/div/div[4]/span/div[3]',
        2: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[6]/div/div/div[2]/div/div[1]/div/div[4]/span/div[4]',
        3: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[6]/div/div/div[2]/div/div[1]/div/div[4]/span/div[5]',
        4: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[6]/div/div/div[2]/div/div[1]/div/div[4]/span/div[6]'
    }

    const TI_3 = {
        1: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[6]/div/div/div[2]/div/div[1]/div/div[6]/span/div[3]',
        2: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[6]/div/div/div[2]/div/div[1]/div/div[6]/span/div[4]',
        3: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[6]/div/div/div[2]/div/div[1]/div/div[6]/span/div[5]',
        4: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[6]/div/div/div[2]/div/div[1]/div/div[6]/span/div[6]'
    }

    const TI_4 = {
        1: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[6]/div/div/div[2]/div/div[1]/div/div[8]/span/div[3]',
        2: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[6]/div/div/div[2]/div/div[1]/div/div[8]/span/div[4]',
        3: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[6]/div/div/div[2]/div/div[1]/div/div[8]/span/div[5]',
        4: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[6]/div/div/div[2]/div/div[1]/div/div[8]/span/div[6]'
    }

    const TI_5 = {
        1: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[6]/div/div/div[2]/div/div[1]/div/div[10]/span/div[3]',
        2: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[6]/div/div/div[2]/div/div[1]/div/div[10]/span/div[4]',
        3: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[6]/div/div/div[2]/div/div[1]/div/div[10]/span/div[5]',
        4: '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[6]/div/div/div[2]/div/div[1]/div/div[10]/span/div[6]'
    }

    const submitBtn = '//*[@id="mG61Hd"]/div[2]/div/div[3]/div/div[1]/div[2]'

    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({ headless: false });

    const array = new Array(20).fill(0);

    await Promise.all(array.map(async () => {

        const page = await browser.newPage();

        // Navigate the page to a URL
        await page.goto('');

        // Set screen size
        // await page.setViewport({ width: 1080, height: 1024 });

        await page.click(xpath + gender[getRandomNumber(0, 1)]);
        await page.click(xpath + age[getRandomNumber(0, 0)]);
        await page.click(xpath + academic[getRandomNumber(0, 0)])
        await page.click(xpath + occupation[getRandomNumber(0, 0)])

        await page.click(xpath + btn)
        await page.waitForNavigation();

        await delay(1000)

        await page.click(xpath + CD_1[getRandomNumber(2, 4)])
        await delay(500)


        await page.click(xpath + CD_2[getRandomNumber(2, 4)])
        await delay(500)

        await page.click(xpath + CD_3[getRandomNumber(2, 4)])
        await delay(500)

        await page.click(xpath + CD_4[getRandomNumber(2, 4)])
        await delay(500)

        await page.click(xpath + CD_5[getRandomNumber(2, 4)])
        await delay(500)


        await page.click(xpath + TZ_1[getRandomNumber(2, 4)])
        await delay(500)

        await page.click(xpath + TZ_2[getRandomNumber(2, 4)])
        await delay(500)

        await page.click(xpath + TZ_3[getRandomNumber(2, 4)])
        await delay(500)

        await page.click(xpath + TZ_4[getRandomNumber(2, 4)])
        await delay(500)

        await page.click(xpath + TZ_5[getRandomNumber(2, 4)])
        await delay(500)


        await page.click(xpath + CS_1[getRandomNumber(2, 4)])
        await delay(500)

        await page.click(xpath + CS_2[getRandomNumber(2, 4)])
        await delay(500)

        await page.click(xpath + CS_3[getRandomNumber(2, 4)])
        await delay(500)

        await page.click(xpath + CS_4[getRandomNumber(2, 4)])
        await delay(500)

        await page.click(xpath + CS_5[getRandomNumber(2, 4)])
        await delay(500)


        await page.click(xpath + OP_1[getRandomNumber(2, 4)])
        await delay(500)

        await page.click(xpath + OP_2[getRandomNumber(2, 4)])
        await delay(500)

        await page.click(xpath + OP_3[getRandomNumber(2, 4)])
        await delay(500)

        await page.click(xpath + OP_4[getRandomNumber(2, 4)])
        await delay(500)

        await page.click(xpath + OP_5[getRandomNumber(2, 4)])
        await delay(500)


        await page.click(xpath + TI_1[getRandomNumber(2, 4)])
        await delay(500)

        await page.click(xpath + TI_2[getRandomNumber(2, 4)])
        await delay(500)

        await page.click(xpath + TI_3[getRandomNumber(2, 4)])
        await delay(500)

        await page.click(xpath + TI_4[getRandomNumber(2, 4)])
        await delay(500)

        await page.click(xpath + TI_5[getRandomNumber(2, 4)])
        await delay(500)


        await page.click(xpath + submitBtn)
        await page.close();
    }))

    await browser.close();
})();