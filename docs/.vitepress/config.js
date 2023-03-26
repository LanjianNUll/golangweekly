import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  ignoreDeadLinks: true, 
  title: '各类开源的周刊及资料',
  description: '收录各类开源的周刊及资料，以便阅读和查找方便',
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,
  head: [['meta', { name: 'theme-color', content: '#3c8772' }]],
  markdown: {
    headers: {
      level: [0, 0]
    }
  },
  themeConfig: {
    nav: [
      {
        text: 'Go语言爱好者周刊',
        link: 'https://github.com/polaris1119/golangweekly',
      },
      {
        text: '阮一峰的网络日志',
        link: 'https://github.com/ruanyf/weekly',
      }
    ],
    sidebar: {
      '/weekly/': sidebarMenu(),
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/LanjianNUll/golangweekly' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present '
    },
    algolia: {
      appId: 'Y01AEM9BXR',
      apiKey: '27cc0191b7ccbc5826530ad342166c86',
      indexName: 'golang_weekly'
    },
  }
});

function _convertParseWeeklyReadme(jsonName) {
    const content = fs.readFileSync('./scripts/'+jsonName+'.json', 'utf8').toString()
    const tree = JSON.parse(content)
    const config = [];
    for (let year in tree) {
        const monthItems = [];
        for (let month in tree[year]) {
            const items = [];
            for (let issue of tree[year][month]) {
                items.push({
                    text: issue.split('-')[1] + '期',
                    link: `/weekly/${jsonName}/${issue}`
                });
            }
            monthItems.push({
                text: month,
                collapsed: true,
                items: items
            });
        }
        config.push({
            text: year,
            collapsed: true,
            items: monthItems
        });
    }
    config.reverse();
    config[0].collapsed = false;
    config[0].items[0].collapsed = false;
    return config
}


function golangWeekly() {
  let golang_weekly = {
    text: 'Go语言爱好者的周刊',
    collapsed: true,
    items: _convertParseWeeklyReadme('golang-weekly')
  }
  return golang_weekly;
}

function ruanWeekly() {
  let weekly = {
    text: '阮一峰老师的周刊',
    collapsed: true,
    items: _convertParseWeeklyReadme('ruan-weekly')
  }
  return weekly;
}

function sidebarMenu() {
  let sidebarArr = []
  sidebarArr.push(golangWeekly())
  sidebarArr.push(ruanWeekly())
  return sidebarArr
}
