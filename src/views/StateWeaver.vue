<template>
  <div class="state-weaver">
    <div class="divider-cinderscript my-2"></div>

    <b-container class="my-4">
      <h1 class="text-center mb-4">State Weaver</h1>

      <!-- Using Bootstrap Grid System -->
      <b-row>
        <b-col cols="12">
          <b-img
            id="stateweaver-logo"
            src="@/assets/img/products/StateWeaver_logo_512.jpg"
            alt="State Weaver Image"
            class="img-fluid float-start me-3"
            style="width: 200px"
          ></b-img>

          <h3>Unity3D State Management</h3>

          <p>
            State Weaver offers a streamlined approach to state management in
            Unity3D, addressing key shortcomings of existing solutions. It
            simplifies the process of transitioning between states, providing a
            more intuitive approach to transition logic. By focusing on the
            target state, State Weaver allows developers to move away from
            complex trigger mechanisms. This shift not only simplifies
            transition logic but also makes state management more accessible and
            less error-prone, reducing the need for managing triggers, listening
            for events, and monitoring state progress.
          </p>
        </b-col>

        <b-col cols="12" class="mt-4">
          <h3>Features</h3>
          <ul>
            <li>
              <strong>State Pathfinding:</strong> State Weaver identifies the
              optimal path through various states and transitions to reach the
              desired state, simplifying navigation logic.
            </li>
            <li>
              <strong>State Sequencing:</strong> When a path is found through
              defined states to the selected state, State Weaver runs the
              component based logic of each state in turn as defined by the
              transitions.
            </li>
            <li>
              <strong>Component-Based States:</strong> State logic is defined by
              adding various components. These components include animations,
              audio clips and custom methods defined in MonoBehaviors and
              ScriptableObjects.
            </li>
            <li>
              <strong>Non-Linear Transitions:</strong> Curve-Bound components
              are available to transition states to tie properties to curve
              values over the duration of the transition. This offers more
              realistic motion so that separate animation states don't always
              need to be created for non-linear movements between states.
            </li>
          </ul>

          <h3>Applications</h3>
          <p>
            State Weaver is particularly useful in procedural animations using
            IK, where it enables control over IK targets through both animations
            and routines. This flexibility is ideal for creating organic,
            dynamic movements without relying solely on linear interpolations.
          </p>
        </b-col>
      </b-row>
    </b-container>

    <div class="divider-cinderscript my-4"></div>

    <b-container>
      <b-row class="mt-5">
        <b-col cols="12" lg="6">
          <h2 class="text-center">Coming Soon</h2>
        </b-col>
      </b-row>

      <b-row class="my-3">
        <b-col cols="12" lg="6">
          <b-img
            src="@/assets/img/products/StateWeaver_sample_transition.jpg"
            alt="State Weaver Image"
            class="img-fluid"
          ></b-img>
        </b-col>
        <b-col cols="12" lg="6">
          <b-img
            src="@/assets/img/products/StateWeaver_sample_graph.jpg"
            alt="State Weaver Image"
            class="img-fluid"
          ></b-img>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style>
#stateweaver-logo {
  float: left;
  margin-right: 20px;
  width: 200px;
}

.content-wrapper {
  overflow: hidden; /* Clearfix for floated image */
}
</style>
