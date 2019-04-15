<div align="center">


# Package template
[![Build Status](https://img.shields.io/travis/com/AckeeCZ/package-template/master.svg?style=flat-square)](https://travis-ci.com/AckeeCZ/package-template)
[![Coverage](https://img.shields.io/codeclimate/coverage/AckeeCZ/package-template.svg?style=flat-square)](https://codeclimate.com/github/AckeeCZ/package-template)
[![Maintainability](https://img.shields.io/codeclimate/maintainability/AckeeCZ/package-template.svg?style=flat-square)](https://codeclimate.com/github/AckeeCZ/package-template)
[![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/AckeeCZ/package-template.svg?style=flat-square)](https://snyk.io/test/github/AckeeCZ/package-template?targetFile=package.json)
[![Dependency Status](https://img.shields.io/david/AckeeCZ/package-template.svg?style=flat-square)](https://david-dm.org/AckeeCZ/package-template)
[![Dev Dependency Status](https://img.shields.io/david/dev/AckeeCZ/package-template.svg?style=flat-square)](https://david-dm.org/AckeeCZ/package-template?type=dev)

This is template for OSS back-end projects

</div>

## Local setup

### History
- Delete `.git` folder, `git init` and create root commit

### Project files
**`CHANGELOG`**
- reset history

**`package.json`**
- update author & contributors
- update name & description
- update repository, version

**`typedoc.json`**
- update name

**`LICENSE`**
- update year / owner

**`README`**
- update title, description
- update / remove badges
- update license if changed

## Remote services

### npm

```yaml
deploy:
  provider: npm
  # TODO
  email: ackeedevelopment@gmail.com
  skip_cleanup: true
  # TODO
  api_key:
    secure: G8gmvUC5aRLRicRx...=
  on:
    tags: true
    repo: AckeeCZ/configuru
```

To generate npm api key:
1. Visit [tokens](https://www.npmjs.com/settings/ackeecz/tokens) and create new one with publish permissions
2. `travis login --com`
3. `travis encrypt --com TOKEN`

### Travis
- Check `.travis.yml` (see `node_js` for versions of node, and `script` for the task definition)
- Log in to [Travis](https://travis-ci.com)
- Add the project (wait for permission asking as member of organization)
- Update `script`, `deploy` (add npm, remove GH pages or update API key etc.)

### Codeclimate
- Log in to [CodeClimate](https://codeclimate.com/oss/dashboard)
- Add the project
- Setup travis `CC_TEST_REPORTER_ID` env
- Setup coverage in `.travis.yml` (will only update in `master` branch with default config)


### Snyk
Badge works out of the box, just update links. However, you can register the project:

- Log in to [Snyk](https://app.snyk.io)
- Add project
- Update badge source and link

### David
- No need to integrate, just update links

## License

This project is licensed under [MIT](./LICENSE).
