import Blog from "../../Blog.vue"
import DefaultTheme from "vitepress/theme"

/** @type {import("vitepress").Theme} */
export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component("Blog")
    }
}