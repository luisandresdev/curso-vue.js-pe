export default {
    title: 'Curso VueJS',
    description: 'Curso de vueJs',
    themeConfig: {
        logo: "/logo.png",
        siteTitle: "Vue.js - People Experts",
        sidebar: [
            {
                text: "Section A",
                collapsible: true,
                items: [
                    { text: "Introduction", link: "/introduction" },
                    { text: "Getting Started", link: "/getting-started" },
                ],
            },
            {
                text: "Section B",
                collapsible: false,
                items: [
                    { text: "Introduction", link: "/introduction" },
                    { text: "Getting Started", link: "/getting-started" },
                ],
            },
            {
                text: "Section C",
                collapsible: true,
                items: [
                    { text: "Introduction", link: "/introduction" },
                    { text: "Getting Started", link: "/getting-started" },
                ],
            },
        ],
        footer: {
            message: "Curso de vue.js - People Experts",
            copyright: "Copyright © 2022-present",
        },
    },
}