#! /usr/bin/env node


// //创建一个输入框 执行生成一个模块文件
// /*
// const inquirer = require('inquirer')
// const path = require('path')
// const fs = require('fs')
// const ejs = require('ejs')
//
// inquirer.prompt([
//     {
//         type: 'input', //type：input,confirm,list,rawlist,checkbox,password...
//         name: 'name', // key 名
//         message: 'Your name', // 提示信息
//         default: 'my-node-cli' // 默认值
//     }
// ]).then(answers => {
//     // 模版文件目录
//     const destUrl = path.join(__dirname, '../templates');
//     // 生成文件目录
//     // process.cwd() 对应控制台所在目录
//     const cwdUrl = process.cwd();
//     // 从模版目录中读取文件
//     fs.readdir(destUrl, (err, files) => {
//         if (err) throw err;
//         files.forEach((file) => {
//             // 使用 ejs 渲染对应的模版文件
//             // renderFile（模版文件地址，传入渲染数据）
//             ejs.renderFile(path.join(destUrl, file), answers).then(data => {
//                 // 生成 ejs 处理后的模版文件
//                 fs.writeFileSync(path.join(cwdUrl, file) , data)
//             })
//         })
//     })
// })*/
//执行一个代码
const {program} = require('commander')
const chalk = require('chalk')
const ora = require('ora');
const figlet = require("figlet")
// // 自定义文本信息
// const message = 'Loading unicorns'
// // 初始化
// const spinner = ora(message);
// // 开始加载动画
// spinner.start();
// program.version('0.0.1').command('create <name>').description('create a new project').action(name=>{
//    /* console.log("project name is " + chalk.rgb(4, 156, 219).underline(name));
//     console.log("project name is " + chalk.hex('#049CDB').bold(name));
//     console.log("project name is " + chalk.bgHex('#049CDB').bold(name))*/
//     setTimeout(() => {
//         // 修改动画样式
//
//         // Type: string
//         // Default: 'cyan'
//         // Values: 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'gray'
//         spinner.color = 'red';
//         spinner.text = 'Loading rainbows';
//
//         setTimeout(() => {
//             // 加载状态修改
//             spinner.stop() // 停止
//             spinner.succeed('Loading succeed'); // 成功 ✔
//             // spinner.fail(text?);  失败 ✖
//             // spinner.warn(text?);  提示 ⚠
//             // spinner.info(text?);  信息 ℹ
//         }, 2000);
//     }, 2000);
// })
// program.parse()

program
    .command('config [value]')
    .description('inspect and modify the config')
    .option('-g, --get <path>', 'get value from option')
    .option('-s, --set <path> <value>')
    .option('-d, --delete <path>', 'delete option from config')
    .action((value, options) => {
        console.log(value, options)
    })
program
    .command("create <name>")
    .description("创建目录")
    .option("-f, --force")
    .action(require("./create"))
// 配置 ui 命令
program
    .command('ui')
    .description('start add open roc-cli ui')
    .option('-p, --port <port>', 'Port used for the UI Server')
    .action((option) => {
        console.log(option)
    })

program
    // 监听 --help 执行
    .on('--help', () => {
        // 使用 figlet 绘制 Logo
        console.log('\r\n' + figlet.textSync('lux', {
            font: 'Ghost',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 80,
            whitespaceBreak: true
        }));
        // 新增说明信息
        console.log(`\r\nRun ${chalk.cyan(`roc <command> --help`)} show details\r\n`)
    })


// 解析用户执行命令传入参数
program.parse(process.argv);
