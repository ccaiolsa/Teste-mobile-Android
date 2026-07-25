import 'dotenv/config'

export const confReport = process.env.REPORTER == 'true' ? {
    reporters: [['allure', { outputDir: 'allure-results' }]],
}: {}