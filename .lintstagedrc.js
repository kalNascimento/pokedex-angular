module.exports = {
  'src/**/*.{js,jsx,ts,tsx,html,css,scss}': async (files) => {
    const filesToLint = await removeIgnoredFiles(files)
    return [`npx prettier --write ${filesToLint}`, `npx eslint ${filesToLint}`]
  },
}