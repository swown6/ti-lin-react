/**
 * 文档的配置文件,也可以在 .umi/dumi/config.json中配置
 */
import { defineConfig } from 'dumi';
const repo = 'ti-lin-react';  // 项目名

export default defineConfig({
  title: 'ti-lin-react', // 网站标题名
  // 网站标题旁边图片
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  // 页面上展示的logo的图片
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  // 打包发布上线的 文件包名字
  outputPath: 'docs-dist',
  // 配置导航条模式 // 默认纵向，
  mode: 'site',
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',

  apiParser: {
    // 自定义属性过滤配置，也可以是一个函数，用法参考：https://github.com/styleguidist/react-docgen-typescript/#propfilter
    propFilter: {
      // 是否忽略从 node_modules 继承的属性，默认值为 false
      skipNodeModules: true,
      // 需要忽略的属性名列表，默认为空数组
      skipPropsWithName: ['autoFocus', 'form', 'formAction', 'formEncType', 'title'],
      // 是否忽略没有文档说明的属性，默认值为 false
      skipPropsWithoutDoc: false,
    },
  },
  history: {
    type: 'hash',
  },
  navs: [
    // null, // 保留默认配置
    {
      title: '指南',
      path: '/guide',
    },
    {
      title: '组件',
      path: '/component',
    },
    {
      title: '作者',
      children: [
        {
          title: 'CSDN',
          path: 'https://blog.csdn.net/m0_71157847?spm=1000.2115.3001.5343',
        },
        {
          title: '掘金',
          path: 'https://juejin.cn/user/1568342086263021',
        },
      ],
    },
    {
      title: 'GitHub',
      path: 'https://github.com/swown6/ti-lin-react',
    },
  ],
});
