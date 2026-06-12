export type Lang = 'zh';

export const dict = {
  zh: {
    nav: {
      business: '业务',
      product: '产品',
      about: '关于我们',
      contact: '联系我们',
    },
    hero: {
      badge: '以长期记忆为核心的智能产品体系',
      titleLine1: '念念不忘，',
      titleLine2: '必有回音',
      subtitle:
        '我们相信，被认真记住的事，终会得到回应。念音科技围绕个人助理、情感陪伴、信息资讯、财经决策支持、知识学习五大方向，构建以长期记忆为核心的智能产品体系。',
      ctaPrimary: '了解业务',
      ctaSecondary: '联系我们',
      demo: {
        appName: 'Pikppo',
        appRole: '你的私人 AI 管家',
        privacy: '本地运行 · 端到端加密',
        userMsg: '还记得我妈生日吗？',
        aiMsg: '当然，6 月 18 日。去年你提前一周订了花，要我今年也帮你留意吗？',
        memoryTag: '已记住 · 长期记忆',
      },
    },
    business: {
      title: '一个信念，五个方向',
      intro:
        '以“记忆与回应”为技术底座，念音把对人的理解，延伸到生活的五个场景。',
      items: [
        {
          name: '个人助理',
          desc: '面向个人用户的智能助理产品，覆盖日程管理、事务提醒与个人知识管理，支持本地化部署，保障用户数据私有。首款产品 Pikppo 已在路上。',
        },
        {
          name: '情感陪伴',
          desc: '基于长期记忆与多人格架构的陪伴型智能体，提供有延续性的对话体验，服务用户的情感与心理陪伴需求。',
        },
        {
          name: '信息资讯',
          desc: '个性化的信息获取与整理服务，依据用户长期偏好筛选、聚合与摘要，提升信息消费效率。',
        },
        {
          name: '财经参谋',
          desc: '面向投资者的市场信息整理与决策辅助工具，提供数据梳理与研究支持，辅助用户独立决策。',
        },
        {
          name: '知识学习',
          desc: '跟踪学习进度的个性化学习助手，基于记忆系统实现长周期的学习陪伴与知识管理。',
        },
      ],
    },
    product: {
      title: '产品',
      name: 'Pikppo',
      tagline: '你的私人 AI 管家。',
      desc: 'Pikppo 是念音科技在“个人助理”方向推出的首款产品。它以长期记忆为核心，支持多角色形态——每个角色拥有独立的记忆与性格；采用本地优先架构，模型可在用户设备端运行，长期记忆经端到端加密存储，任何人无法读取，包括我们。',
      cta: '访问 pikppo.com',
      url: 'https://pikppo.com',
      memories: [
        { tag: '生活', text: '记得你妈妈的生日是 6 月 18 日。' },
        { tag: '习惯', text: '你常在睡前回顾第二天的日程。' },
        { tag: '偏好', text: '阅读资讯时，你更关心深度长文。' },
        { tag: '事务', text: '本周五前要回复张总的合作邮件。' },
      ],
    },
    about: {
      title: '关于我们',
      body: [
        '念音科技成立于 2025 年，总部位于北京，是一家专注大模型与智能体应用的科技公司。创始团队拥有十余年大型互联网公司核心系统研发与技术管理经验。',
        '公司之名，取自“念念不忘，必有回音”——我们相信，有记忆的智能，才能真正回应人的需要。',
      ],
      emphasis: '念念不忘，必有回音',
      tags: ['大模型', '智能体', '长期记忆', '本地优先', '隐私安全'],
    },
    contact: {
      title: '联系我们',
      subtitle: '商务合作、产品咨询或加入我们，欢迎与我们联系。',
      emailLabel: '邮箱',
      email: 'contact@nianien.com',
      addressLabel: '地址',
      address: '中国 · 北京',
    },
    footer: {
      slogan: '念念不忘，必有回音。',
      links: '快速链接',
      contactTitle: '联系方式',
      productTitle: '产品',
      company: '北京念音科技有限公司',
      icpPlaceholder: '京ICP备 000000 号',
    },
  },
};

export type Dict = (typeof dict)['zh'];
