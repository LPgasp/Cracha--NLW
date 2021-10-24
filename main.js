const LinksSocialMedia = {
  github: 'LPgasp',
  instagram: 'pivo15',
  facebook: 'Lucasgaspar25',
  youtube: 'channel/UC6UffeleIBlS8_4zO2lG_eA',
  twitter: 'lucaspgg15'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

// i = i + 1
// i++

// ser humano = 123456789
// computador começa pelo 0 ou seja 0123456789]
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
