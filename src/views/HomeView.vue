<template>
  <div class="home">
    <div class="divider-cinderscript"></div>
    <div class="banner-container">
      <img
        src="@/assets/img/branding/CinderScript-flaming-pen-banner.jpg"
        alt="Banner"
        class="banner-image"
      />
    </div>

    <div class="divider-cinderscript"></div>

    <b-container class="my-5">
      <!-- State Weaver Section -->
      <b-row class="mt-5">
        <b-col cols="12" lg="6">
          <h2 class="text-center">
            Accelerate Your Game Design with State Weaver
          </h2>
          <p>
            Welcome to Cinder Script, an independent developer with a passion
            for game development. I am dedicated to working on
            <strong>State Weaver</strong>, a versatile tool initially crafted to
            enhance the workflow and state management of Mecanim and its
            Animation Controllers. It has since evolved to cater to general
            state management needs.
          </p>
          <p>
            State Weaver enables developers to design sequences of
            component-based states within a graph editor. This approach removes
            the need for writing extensive logic to track current and next
            states. Instead, State Weaver intelligently navigates through
            designated states along predefined paths. For Mechanim specifically,
            this relaxes the complexity of managing state change triggers.
          </p>
          <p>
            Currently in the works are example projects to showcase how State
            Weaver can be effectively used for creating character controllers,
            animating sequences, playing audio clips, and executing custom
            scripts.
          </p>
        </b-col>
        <b-col cols="12" lg="6">
          <b-img
            src="@/assets/img/products/StateWeaver/StateWeaver_sample_graph.jpg"
            alt="State Weaver Image"
            fluid
          ></b-img>

          <p class="mt-3">Get it here: coming soon</p>
        </b-col>
      </b-row>

      <div class="divider-cinderscript my-4"></div>

      <!-- 3D Assets Section -->
      <b-row>
        <b-col cols="12" lg="6">
          <h2 class="text-center test">Free 3D Assets</h2>
          <p class="mt-3">
            I also enjoy working in Blender and Substance Painter. I'm not a
            professional artist or modeler, so these assets are currently free.
            If there is interest in these products, I may introduce new versions
            of the current models with LOD.
          </p>
          <p class="mt-3">Get 3D assets here: coming soon</p>
        </b-col>
        <b-col cols="12" lg="6">
          <b-img
            src="@/assets/img/3DAssets/1911/1911-Blackened.png"
            alt="3D Assets Image"
            fluid
          ></b-img>
        </b-col>
      </b-row>

      <div class="divider-cinderscript my-4"></div>

      <!-- About Section -->
      <b-row>
        <b-col cols="12" lg="6">
          <h2 class="text-center brand">Cinder Script</h2>
          <p class="mt-3">
            I am an independent software developer based in Seattle, WA who has
            enjoyed developing small games and simulations in Unity since
            version 2.0 in 2007. Any inquiries about Cinder Script or these
            products can be sent to
            <a href="mailto:CinderScript@gmail.com">CinderScript@gmail.com</a>.
          </p>
        </b-col>
        <b-col cols="12" lg="6">
          <b-img
            src="@/assets/img/branding/Seattle_red_white_darkbackground.jpg"
            alt="About Image"
            fluid
          ></b-img>
        </b-col>
      </b-row>
    </b-container>

    <div class="divider-cinderscript"></div>
  </div>
</template>

<style>
.banner-container {
  width: 100%;
  height: 500px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  position: relative; /* Needed for positioning pseudo-elements */
}

.banner-image {
  height: 500px;
  width: auto;
}
</style>
