<template>
  <div class="excerpt">
    <div class="container">
      <div class="columns">
        <div>
          <div class="testimonial">
            <blockquote>
              <p>
                The goal overall has been to make life Multi-Planetary and enable humanity to become a spacefaring
                civilization.
              </p>
            </blockquote>
            <div class="person-info">
              <img src="~/assets/img/Elon_Musk.jpg" alt="">
              <div class="name">
                <p>Elon Musk</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card-list">
          <div class="card">
            <p>"Make life multiplanetary!"</p>
            <div class="person-info">
              <img src="~/assets/img/Elon_Musk.jpg" alt="">
              <div class="name">
                <p>Elon Musk</p>
              </div>
            </div>
          </div>
          <div class="card">
            <p>"I am accumulating resources to help make life multiplanetary & extend the light of consciousness to the
              stars"</p>
            <div class="person-info">
              <img src="~/assets/img/Elon_Musk.jpg" alt="">
              <div class="name">
                <p>Elon Musk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang='scss' scoped>
@font-face {
  font-family: 'kelvetica';
  src: url('~/assets/font/kelvetica/KelveticaNobis-A5z6.ttf');
}

@font-face {
  font-family: 'Mosk_Medium';
  src: url('~/assets/font/Mosk/Mosk Medium 500.ttf');
}

* {
  padding: 0;
  margin: 0;
}

blockquote {
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
}

.excerpt {
  margin: 40px 0;

  .container {
    width: 75%;
    max-width: 1200px;
    margin: 0 auto;

    .columns {
      // display: flex;
      // justify-content: center;
      // gap: 60px;
      // align-items: center;
      display: grid;
      grid-template-columns: 1fr 350px;
      grid-gap: 60px;
      align-items: center;

      .testimonial {
        display: flex;
        flex-direction: column;
        gap: 40px;

        blockquote {
          font-size: 1.75rem;
          font-family: 'kelvetica', sans-serif;

          p {
            padding: 0 3rem;
            margin: 0 -3rem;
          }

          p::before {
            content: "“";
            margin-left: -28px;
            height: 1rem;
            display: inline-block;
            font-size: 3rem;
            color: #fff;
            font-family: 'Mosk_Medium', sans-serif;
          }

          p::after {
            content: "“";
            position: relative;
            top: 10px;
            margin-top: -40px;
            display: inline-block;
            transform: rotate(180deg);
            font-size: 3rem;
            color: #fff;
            font-family: 'Mosk_Medium', sans-serif;
          }
        }

        .person-info {
          display: flex;
          align-items: center;
          font-weight: 700;
          margin-top: 1em;

          img {
            width: 4rem;
            height: 4rem;
            border-width: 3px;
            display: block;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid #00e472;
          }

          .name {
            margin-left: 10px;
            margin-right: 10px;

            p {
              font-size: 20px;
              color: #00e472;
            }
          }
        }
      }

      .card-list {
        // display: flex;
        // flex-direction: column;
        // gap: 40px;
        display: grid;
        grid-template-columns: 100%;
        grid-gap: 40px;
        font-family: 'kelvetica', sans-serif;

        .card {
          padding: 30px;
          border: 1px solid #434343;
          border-radius: 12px;

          .person-info {
            display: flex;
            align-items: center;
            font-weight: 700;
            margin-top: 10px;

            img {
              display: block;
              width: 2rem;
              height: 2rem;
              border-radius: 50%;
              object-fit: cover;
              border: 2px solid #00e472;
            }

            .name {
              margin-left: 10px;
              margin-right: 10px;
              color: #00e472;
            }
          }
        }

        .card:hover {
          background: radial-gradient(50% 50% at 50% 50%, #2c304f 0%, rgba(24, 24, 24, .77) 100%);
        }
      }
    }
  }
}

@media (max-width: 1280px) {}

@media (max-width: 1024px) {
  .excerpt {
    .container {
      width: auto;
      margin: 0 1.5rem;

      .columns {
        grid-template-columns: 100%;

        .testimonial {
          blockquote {
            p {
              padding: 0 1.8rem;
              margin: 0 -0.7rem;

              font-size: 1.3rem;
            }

          }

          .person-info {
            img {
              width: 3.5rem;
              height: 3.5rem;
            }

            .name {
              p {
                font-size: 1rem;
              }
            }
          }
        }

        .card-list {
          grid-template-columns: 1fr 1fr;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .excerpt {
    .container {

      .columns {

        .card-list {
          grid-template-columns: 100%;
        }
      }
    }
  }
}

@media (max-width: 640px) {}
</style>