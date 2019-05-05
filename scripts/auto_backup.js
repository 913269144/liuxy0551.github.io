require('shelljs/global');

try {

    hexo.on('deployAfter', function() {//当deploy完成后执行备份

        run();

    });

} catch (e) {

    console.log("产生了一个错误啊<(￣3￣)> !，错误详情为：" + e.toString());

}

function run() {

    if (!which('git')) {

        echo('Sorry, this script requires git');

        exit(1);

    } else {

        echo("============================Auto Backup Begin============================");

        cd('/Users/liuxy/Desktop/Projects/Blog/liuxy0551.github.io');    //此处修改为Hexo根目录路径

        if (exec('git add -A').code !== 0) {

            echo('Error: git add failed');

            exit(1);

        } else {

          echo('Success: git add success');

        }

        if (exec('git commit -m "optimize"').code !== 0) {

            echo('Error: git commit failed');

            exit(1);

        } else {

          echo('Success: git commit success');

        }

        if (exec('git push origin develop').code !== 0) {

            echo('Error: git push failed');

            exit(1);

        } else {

          echo('Success: git push success');

        }

        echo("============================Auto Backup Complete============================")

    }

}
