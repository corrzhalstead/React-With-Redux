module.exports = {
    stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx)"],
    addons:["@storybook/addon-links", "@storybook/addon-essentials"],
    core: {
        builder: "webpack5",
    }
}

