<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'


const links = [
  {
    id: 1,
    name: 'HOME',
    url: '/'
  },
  {
    id: 2,
    name: 'BLOG',
    url: '/blog'
  },
  {
    id: 3,
    name: 'DOCS',
    url: '/docs'
  },
  {
    id: 4,
    name: 'EVENT',
    url: '/event',
    children: [
      {
        id: 21,
        name: 'History',
        url: '/about/history'
      },
      {
        id: 22,
        name: 'Team',
        url: '/about/team'
      }
    ]
  },
  {
    id: 5,
    name: 'STORE',
    url: '/store'
  },
  // more links...
]
const icons = [
  {
    link: 'https://twitter.com/INUStoken',
    viewBox: '0 0 24 24',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'
  },
  {
    link: 'https://t.me/multiplanetaryinus',
    viewBox: '0 0 24 24',
    path: 'M20.537 5.233c-.014-.063-.044-.122-.088-.169s-.099-.083-.161-.102c-.225-.044-.458-.028-.674.048 0 0-15.02 5.398-15.877 5.996-.185.129-.247.203-.278.291-.148.425.313.613.313.613l3.871 1.262a.43.43 0 0 0 .196-.012l9.321-5.764c.072-.022.126 0 .114.054-.189.646-7.079 6.77-7.118 6.807-.018.015-.033.035-.042.057s-.013.046-.011.07l-.36 3.777s-.151 1.179 1.025 0c.834-.835 1.634-1.526 2.036-1.862 1.331.919 2.764 1.935 3.381 2.464.104.101.226.179.361.232s.279.076.423.072c.589-.023.75-.667.75-.667s2.736-11.012 2.829-12.487c.009-.145.021-.237.022-.336.005-.115-.006-.23-.034-.342z'
  },
  {
    link: '/contact',
    viewBox: '0 0 24 24',
    path: 'M22,3H2A1,1,0,0,0,1,4V20a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V4A1,1,0,0,0,22,3ZM21,19H3V9.477l8.628,3.452a1.01,1.01,0,0,0,.744,0L21,9.477ZM21,7.323l-9,3.6-9-3.6V5H21Z'
  },
  // Add more icons here
]

const showSubmenu = (event) => {
  event.target.querySelector('.menu-tag').style.display = 'block'
}

const route = useRoute()
const isCurrentRoute = (url) => {
  return route.path === url
}

// button
const btnRef = ref(null)
const isActive = ref(false)
const navcolor = ref(null)

function toggleActive () {
  isActive.value = !isActive.value
}
watch(route, () => {
  isActive.value = false
})

watch(isActive, (newValue) => {
  if (newValue) {
    btnRef.value.classList.add('active')
    navcolor.value.style.backgroundColor = '#1b1b1b'
  } else {
    btnRef.value.classList.remove('active')
    navcolor.value.style.backgroundColor = 'hsla(0, 0%, 9%, 0.95)'
  }
})
</script>

<template>
  <header class="navbar" ref="navcolor">
    <nav class="nav">
      <div class="mobile-toggle">
        <div class="mobileMenu">
          <NuxtLink class="logo">
            <h2>MultiPlanetary INUS</h2>
          </NuxtLink>
          <div class="cl">
            <div class="searchInput">
              <div class="searchIcon">
                <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                  class="fill-current SearchInput_searchIcon__TYgf_">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M11.35 6.675a4.675 4.675 0 1 1-9.35 0 4.675 4.675 0 0 1 9.35 0Zm-.715 5.374a6.675 6.675 0 1 1 1.414-1.414l3.658 3.658a1 1 0 0 1-1.414 1.414l-3.658-3.658Z">
                  </path>
                </svg>
              </div>
              <span class="search"></span>
            </div>
            <button ref="btnRef" @click="toggleActive" class="menu_burger">
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
      <div class="menu-collapse">
        <ul class="links">
          <li v-for="link in links" :key="link.id" class="link" :class="{ 'active-link': isCurrentRoute(link.url) }">
            <NuxtLink class="tag" :to="link.url">
              <span>{{ link.name }}</span>
              <svg v-if="link.children" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-chevron-down transform scale-75 rotate opacity-50" data-v-6ec9c1a8="">
                <polyline points="6 9 12 15 18 9" data-v-6ec9c1a8=""></polyline>
              </svg>
            </NuxtLink>
            <ul class="menu-tag" v-if="link.children">
              <div class="men">
                <li v-for="subLink in link.children" :key="subLink.id" class="sub-link">

                  <NuxtLink :to="subLink.url">
                    {{ subLink.name }}
                  </NuxtLink>

                </li>
              </div>
            </ul>
          </li>
        </ul>

        <div class="column">
          <div class="socialIcons">
            <ul class="icons">
              <li v-for="(icon, index) in icons" :key="index">
                <a class="Icons_link" :href="icon.link">
                  <div class="Icons_link_link">
                    <svg :viewBox="icon.viewBox" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path :d="icon.path"></path>
                    </svg>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="searchInput">
            <div class="searchIcon">
              <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M11.35 6.675a4.675 4.675 0 1 1-9.35 0 4.675 4.675 0 0 1 9.35 0Zm-.715 5.374a6.675 6.675 0 1 1 1.414-1.414l3.658 3.658a1 1 0 0 1-1.414 1.414l-3.658-3.658Z">
                </path>
              </svg>
            </div>
          </div>
          <div class="download">
            <NuxtLink class="desktop" to="/desktop">
              <button class="btn">Go to App →</button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <nav v-if="isActive" class="menu-container">
    <div class="container">
      <ul class="links">
        <li v-for="link in links" :key="link.id" class="link" :class="{ 'active-link': isCurrentRoute(link.url) }">
          <NuxtLink class="tag" :to="link.url">
            <span>{{ link.name }}</span>
            <svg v-if="link.children" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-chevron-down transform scale-75 rotate opacity-50" data-v-6ec9c1a8="">
              <polyline points="6 9 12 15 18 9" data-v-6ec9c1a8=""></polyline>
            </svg>
          </NuxtLink>
          <ul class="menu-tag" v-if="link.children">
            <div class="men">
              <li v-for="subLink in link.children" :key="subLink.id" class="sub-link">

                <NuxtLink :to="subLink.url">
                  {{ subLink.name }}
                </NuxtLink>

              </li>
            </div>
          </ul>
        </li>
      </ul>
      <div class="column">
        <div class="socials">
          <NuxtLink class="social" to="https://twitter.com/INUStoken" target="_blank">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M20.571 6.697c-.643.268-1.286.482-2.036.536.75-.429 1.286-1.125 1.554-1.929-.696.429-1.446.696-2.25.857-.643-.696-1.554-1.125-2.518-1.125-1.929 0-3.536 1.554-3.536 3.536 0 .268.054.536.107.804-2.946-.161-5.518-1.554-7.286-3.696a3.37 3.37 0 0 0-.482 1.768c0 1.232.643 2.304 1.554 2.946-.589 0-1.125-.161-1.607-.429v.054c0 1.714 1.232 3.107 2.839 3.429-.321.053-.589.107-.911.107-.214 0-.429 0-.643-.054.429 1.393 1.768 2.411 3.268 2.464-1.179.964-2.732 1.5-4.393 1.5-.268 0-.589 0-.857-.054 1.607.964 3.482 1.554 5.464 1.554 6.482 0 10.018-5.357 10.018-10.018v-.429c.643-.536 1.232-1.125 1.714-1.821z">
              </path>
            </svg>
          </NuxtLink>
          <NuxtLink class="social" to="https://twitter.com/INUStoken" target="_blank">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M20.571 6.697c-.643.268-1.286.482-2.036.536.75-.429 1.286-1.125 1.554-1.929-.696.429-1.446.696-2.25.857-.643-.696-1.554-1.125-2.518-1.125-1.929 0-3.536 1.554-3.536 3.536 0 .268.054.536.107.804-2.946-.161-5.518-1.554-7.286-3.696a3.37 3.37 0 0 0-.482 1.768c0 1.232.643 2.304 1.554 2.946-.589 0-1.125-.161-1.607-.429v.054c0 1.714 1.232 3.107 2.839 3.429-.321.053-.589.107-.911.107-.214 0-.429 0-.643-.054.429 1.393 1.768 2.411 3.268 2.464-1.179.964-2.732 1.5-4.393 1.5-.268 0-.589 0-.857-.054 1.607.964 3.482 1.554 5.464 1.554 6.482 0 10.018-5.357 10.018-10.018v-.429c.643-.536 1.232-1.125 1.714-1.821z">
              </path>
            </svg>
          </NuxtLink>
          <NuxtLink class="social" to="https://twitter.com/INUStoken" target="_blank">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M20.571 6.697c-.643.268-1.286.482-2.036.536.75-.429 1.286-1.125 1.554-1.929-.696.429-1.446.696-2.25.857-.643-.696-1.554-1.125-2.518-1.125-1.929 0-3.536 1.554-3.536 3.536 0 .268.054.536.107.804-2.946-.161-5.518-1.554-7.286-3.696a3.37 3.37 0 0 0-.482 1.768c0 1.232.643 2.304 1.554 2.946-.589 0-1.125-.161-1.607-.429v.054c0 1.714 1.232 3.107 2.839 3.429-.321.053-.589.107-.911.107-.214 0-.429 0-.643-.054.429 1.393 1.768 2.411 3.268 2.464-1.179.964-2.732 1.5-4.393 1.5-.268 0-.589 0-.857-.054 1.607.964 3.482 1.554 5.464 1.554 6.482 0 10.018-5.357 10.018-10.018v-.429c.643-.536 1.232-1.125 1.714-1.821z">
              </path>
            </svg>
          </NuxtLink>
          <NuxtLink to="/desktop" class="desktop">
            <button class="btn">Go to App →</button>
          </NuxtLink>
        </div>
        <div>
          <div class="note">Email</div>
          <a class="email" href="mailto:dev@multiplanetaryinus.io" target="_blank"
            rel="noreferrer">dev@multiplanetaryinus.io</a>
        </div>
      </div>
    </div>

  </nav>
</template>

<style lang='scss' scoped>
@font-face {
  font-family: 'DrukText-Bold-Trial';
  src: url('~/assets/font/Durk/DrukText-Bold-Trial.otf');
}

@font-face {
  font-family: 'kelvetica';
  src: url('~/assets/font/kelvetica/KelveticaNobis-A5z6.ttf');
}

@font-face {
  font-family: 'Inter-Bold-4';
  src: url('~/assets/font/Inter/Inter-Bold-4.otf');
}

*,
:after,
:before {
  box-sizing: inherit;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  color: inherit;
  text-decoration: inherit;
}

* {
  box-sizing: border-box;
  font-family: "kelvetica", sans-serif;
}

button {
  background: none;
  padding: 0;
  margin: 0;
  border-width: 0;
  cursor: pointer;
  box-sizing: inherit;
  outline: none;
}

.navbar {
  padding-top: 1.5rem;

  .nav {
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;

    .mobile-toggle {
      display: none;

      .mobileMenu {
        display: flex;
        width: 100%;
        justify-content: space-between;
        // justify-content: center;
        align-items: center;

        .logo {
          h2 {
            text-transform: uppercase;
            font-family: 'DrukText-Bold-Trial', sans-serif;
          }
        }

        .cl {
          display: flex;
          justify-content: center;
          align-items: center;

          .searchInput {
            position: relative;
            transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
            transition-timing-function: cubic-bezier(.4, 0, .2, 1);
            transition-duration: .15s;

            .searchIcon {
              display: flex;
              height: 45px;
              width: 45px;
              align-items: center;
              justify-content: center;
              z-index: 10;
              cursor: pointer;
              border-radius: 9999px;
              background-color: #363636;
              outline: 2px solid transparent;
              outline-offset: 2px;

              svg {
                color: #d9d9d9;
                width: 17.5px;
                transition-property: none;
                fill: currentColor;
              }
            }
          }

          .menu_burger {
            margin-left: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 45px;
            height: 45px;
            background-color: #363636;
            border-radius: 50%;

            span {
              display: flex;
              justify-content: space-between;
              width: 20px;
              height: 6px;
              margin: 2px 0;
            }

            span:first-child {
              transform: translateY(5px) rotate(45deg);
            }

            span:nth-child(2) {
              transform: translateY(-5px) rotate(-45deg);
            }

            span::before {
              content: "";
              width: 6px;
              height: 6px;
              border-radius: 3px;
              background: #d9d9d9;
              transition: width .2s, background .2s;
            }

            span::after {
              content: "";
              width: 6px;
              height: 6px;
              border-radius: 3px;
              background: #d9d9d9;
              transition: width .2s, background .2s;
            }
          }

          .active {
            span::before {
              width: 12px;
            }

            span::after {
              width: 12px;
            }
          }
        }





      }
    }
  }

  .menu-collapse {
    display: flex;
    justify-content: space-between;

    .links {
      display: flex;
      align-items: center;

      .link {
        // display: flex;
        margin-right: 1rem;
        position: relative;


        .tag {
          padding: 0.5rem 1rem 0.5rem 1rem;
          align-items: center;
          font-size: 1.25rem;
          line-height: 1.75rem;
          font-weight: 700;
          border-radius: 0.375rem;
          transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;
          transition-timing-function: cubic-bezier(.4, 0, .2, 1);
          transition-duration: .15s;


          svg {
            margin-left: 0.25rem;
            opacity: 0.5;
            vertical-align: middle;
            transition: transform .1s ease-in-out;

            --tw-scale-x: .75;
            --tw-scale-y: .75;
            --tw-translate-x: 0;
            --tw-translate-y: 0;
            --tw-rotate: 0;
            --tw-skew-x: 0;
            --tw-skew-y: 0;
            --tw-scale-x: 1;
            --tw-scale-y: 1;
            transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
          }
        }

        .tag:hover {
          // background-color: #00e472;
          background-color: rgba(56, 56, 56, 1);

          svg {
            --tw-rotate: 180deg;
            --tw-translate-y: .15rem;
          }
        }

        .menu-tag {

          display: none;

          position: absolute;
          top: auto;
          padding-top: 1.25rem;
          padding-bottom: 1.25rem;
          z-index: 99;

          .men {
            background-color: #00e472;
            padding: 1rem;
            overflow: hidden;
            border-radius: 0.375rem;

            .sub-link {
              padding: 1rem;
              border-radius: 0.5rem;
            }

            .sub-link:hover {
              background-color: #00ce67;
            }
          }

        }
      }

      .link:hover .menu-tag {
        display: block;
        // left: -16px;
      }

      .active-link .tag {
        background-color: #00e472;
      }
    }

    .column {
      display: flex;
      align-items: center;

      .socialIcons {
        display: flex;

        .icons {
          display: flex;

          .Icons_link {
            color: rgb(245, 245, 240);
            transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
            transition-timing-function: cubic-bezier(.4, 0, .2, 1);
            transition-duration: .15s;

            .Icons_link_link {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 40px;
              height: 40px;
              border-radius: 50%;

              svg {

                width: 20px;
                height: 20px;
              }
            }
          }

          .Icons_link:hover {
            color: rgb(115, 220, 140);
          }
        }
      }

      .searchInput {
        position: relative;
        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
        transition-timing-function: cubic-bezier(.4, 0, .2, 1);
        transition-duration: .15s;
        margin-left: 20px;

        .searchIcon {
          position: relative;
          z-index: 10;
          background-color: #363636;
          color: #fff;
          display: flex;
          height: 45px;
          width: 45px;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border-radius: 99%;

          svg {
            width: 18px;
            transition-property: none;
            fill: currentColor;
          }
        }

        .searchIcon:hover {
          background-color: #73dc8c;
          color: #1e1919;
        }
      }

      .download {
        display: flex;

        .desktop {
          margin-left: 40px;
          width: 180px;

          .btn {
            cursor: pointer;
            font-size: 16px;
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            white-space: pre;
            border-radius: 999px;
            border-width: 2px;
            border-color: transparent;
            font-weight: 500;
            line-height: 21px;
            letter-spacing: .011em;
            padding: 13px 21px 13px 19px;
            // background-color: #73dc8c;
            background-color: #00e472;
            color: #1e1919;
            width: 100%;
            transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
            transition-timing-function: cubic-bezier(.4, 0, .2, 1);
            transition-duration: .15s;
          }

          .btn:hover {
            background-color: #18f084;
          }
        }
      }
    }
  }
}

.menu-container {
  position: fixed;
  // top: 90.81px;
  top: 0;
  left: 0;
  z-index: 20;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 12px;
  background: #151515;
  overflow: auto;


  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 40px 28px;
    border-radius: 12px;
    overflow: hidden;
    background: rgba(34, 34, 34, .5);

    .links {
      position: relative;
      z-index: 3;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      margin: auto 0;

      .link {
        font-size: 40px;
        line-height: 48px;
        margin: 20px 0;
        font-weight: 900;
        letter-spacing: -.02em;
        color: gray;
        transition: color .2s;
      }

      .active-link {
        color: #00e472;
      }
    }

    .column {
      position: relative;
      display: flex;
      align-items: stretch;
      flex-direction: column;

      .socials {
        display: flex;
        flex: 0 0 auto;
        margin-bottom: 24px;
        align-items: center;

        .social {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #222325;
          margin-right: 32px;

          svg {
            fill: gray;
            transition: fill .2s;
          }
        }

        .social:hover {
          svg {
            fill: #73dc8c;
          }
        }

        .desktop {
          margin-left: 30px;
          width: 180px;

          .btn {
            padding: 13px 21px 13px 19px;
            background-color: #00e472;
            width: 100%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            white-space: pre;
            border-radius: 9999px;
            border-width: 2px;
            border-color: transparent;
            font-size: 15px;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: .011em;

          }
        }

        .desktop:hover {
          filter: brightness(0.85);
        }
      }

      .note {
        font-size: 16px;
        line-height: 19px;
        color: gray;
      }

      .email {
        font-size: 16px;
        line-height: 19px;
        font-weight: 800;
        color: #ddd;
      }
    }
  }
}


@media (max-width: 1280px) {
  .navbar {
    .nav {
      padding-left: 16px;
      padding-right: 16px;
    }
  }
}

@media (max-width: 1024px) {
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 99;
    transition: all .2s;
    background-color: hsla(0, 0%, 9%, .95);

    .nav {
      max-width: 1024px;

      .mobile-toggle {
        display: flex;
      }

      .menu-collapse {
        display: none;
      }
    }
  }
}

@media (max-width: 768px) {
  .navbar {
    bottom: 0;
    top: auto;
    background-color: #26292f;
    border-radius: 1rem 1rem 0 0;
    padding-top: 0;

    .nav {
      max-width: 768px;

      .mobile-toggle {
        .mobileMenu {
          .cl {}
        }
      }
    }
  }

  .menu-container {}
}

@media (max-width: 640px) {}
</style>