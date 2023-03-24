import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  ignoreDeadLinks: true, 
  title: 'ruanyf-weekly',
  description: 'Go语言爱好者周刊',
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
      }
    ],
    sidebar: {
      '/weekly/': sidebarWeekly(),
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/LanjianNUll/golangweekly' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present '
    },
    algolia: {
      appId: 'JMQN3OHTS2',
      apiKey: '9bb35b7fbb4b3ae36bb0f2ac9af77b5e',
      indexName: 'ruanyf-weekly'
    },
  }
});

function _convertParseWeeklyReadme() {
    const content = fs.readFileSync('./scripts/weekly.json', 'utf8').toString()
    const tree = JSON.parse(content)
    const config = [];
    for (let year in tree) {
        const monthItems = [];
        for (let month in tree[year]) {
            const items = [];
            for (let issue of tree[year][month]) {
                items.push({
                    text: issue.split('-')[1] + '期',
                    link: `/weekly/${issue}`
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

function sidebarWeekly() {
  return _convertParseWeeklyReadme();
}