<template>
  <div class="state-weaver">
    <div class="divider-cinderscript my-2"></div>

    <b-container class="my-4">
      <h1 class="text-center mb-4">State Weaver - Coming Soon</h1>

      <!-- Using Bootstrap Grid System -->
      <b-row>
        <b-col cols="12">
          <b-img
            id="stateweaver-logo"
            src="@/assets/img/products/StateWeaver/StateWeaver_logo_512.jpg"
            alt="State Weaver Image"
            class="float-start me-3"
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
      <b-row class="mt-2">
        <b-col>
          <h2 class="text-center">Usage Overview</h2>
          <p>
            A StateWeaver component is added to a GameObject in the scene. Each
            StateWeaver needs a reference to a WeaverGraph asset, which acts
            similarly to an AnimationController. Many StateWeaver components may
            reference the same graph asset, and at runtime, a runtime graph
            object unique to each StateWeaver is built and processed. Each
            StateWeaver can be told to run any states defined in that graph
            asset, and the StateWeaver will find the shortest path from the
            currently running state to the targeted state and execute that path
            according to the transitions specified.
          </p>
        </b-col>
      </b-row>

      <b-row>
        <b-col lg="4">
          <h3>Create a Weaver Graph</h3>
          <p>
            Create a new WeaverGraph asset: Use the right-click context menu in
            the project explorer: [Create] -> [State Weaver] -> [Weaver Graph].
            Double-click the graph asset to open it in the Editor Window.
            Right-click on the editor's canvas area to add state and transition
            nodes. Make connections between the nodes by dragging connections
            between node ports. Clicking on nodes in the editor window will open
            the inspector window for states and transitions where components can
            be added. These components will run when the parent node becomes
            active at runtime.
          </p>
        </b-col>

        <b-col lg="4">
          <h3>Add StateWeaver</h3>
          <p>
            Add a StateWeaver script component to a scene object in Unity and
            set the WeaverGraph reference to a graph asset. Many StateWeaver
            components may reference the same graph asset, and at runtime, a
            runtime graph object unique to that StateWeaver is built and
            processed.
          </p>
        </b-col>

        <b-col lg="4">
          <h3>Select Target State</h3>
          <p>
            At runtime, select a state through the StateWeaver debug option, or
            by calling the StateWeaver method <code>SetTargetState()</code> or
            <code>TrySetTargetState()</code>. The StateWeaver will traverse the
            shortest path from the current state to the desired state following
            the transitions defined in the graph.
          </p>
        </b-col>
      </b-row>

      <div class="divider-cinderscript my-4"></div>

      <h2 class="text-center">Interfaces</h2>

      <!-- Editor Window Info -->
      <b-row>
        <b-col>
          <h3>Weaver Graph Editor</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" lg="6">
          <p class="mt-3">
            Open with the menu [Window] -> [State Weaver] -> [Open Graph
            Editor], or by double-clicking a graph asset in the project view.
          </p>

          <p>
            The graph asset list inside the editor at the top-left side of the
            window can be used to set the displayed graph. Double-clicking
            graphs in this list opens them in the Weaver Graph’s inspector.
          </p>

          <p>
            Nodes can be added to the graph editor’s canvas through the context
            menu accessed by right-clicking and selecting Add State or Add
            Transition. Right-clicking on a state will allow the user to set
            that state as the Entry State.
          </p>

          <p>
            Nodes can also be added to the graph by dragging a connection of an
            existing node’s port onto an empty space in the canvas. States may
            connect to many transitions, but each transition must have only one
            input and output state. Components are added to the states and
            transitions through their inspector window. Open this inspector
            window by clicking on a node on the canvas.
          </p>

          <p>
            Note on Node Colors: Many StateWeaver components may reference the
            same WeaverGraph asset and each may be in a different runtime state.
            Nodes markings for Target and Running states are shown for the
            StateWeaver component when their containing GameObject is selected
            in the Hierarchy window.
          </p>
        </b-col>
        <b-col cols="12" lg="6">
          <h6>During Edit Mode</h6>
          <b-img
            src="@/assets/img/products/StateWeaver/weaver_graph_dave.jpg"
            alt="Weaver Graph Screenshot"
            class="mb-1"
            fluid
          ></b-img>
          <figcaption class="figure-caption mb-3 mt-0 text-center">
            Entry state is marked orange. The StateWeaver containing GameObject
            must be selected in the Hierarchy.
          </figcaption>

          <h6>During Play Mode</h6>
          <b-img
            src="@/assets/img/products/StateWeaver/weaver_graph_runtime_colors.jpg"
            alt="Weaver Graph Screenshot"
            class="mb-1"
            fluid
          ></b-img>
          <figcaption class="figure-caption mb-3 mt-0 text-center">
            Running state is marked blue.
            <br />
            Target state is marked purple.
          </figcaption>
        </b-col>
      </b-row>

      <!-- Weaver Graph Inspector Info -->
      <b-row>
        <b-col>
          <h3>Weaver Graph Inspector</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" lg="6">
          <p class="mt-3">
            Graphs also have an inspector window. It will open when a graph
            asset is selected in the project view, or when double-clicking a
            graph listed in the WeaverGraph Editor.
          </p>

          <p>
            The graph’s inspector allows the user to see all nodes existing in
            the graph asset, including those that have been recently deleted.
            Users can return deleted nodes to the canvas here. Users can also
            edit the trash settings of each WeaverGraph asset.
          </p>

          <p>
            All nodes of a WeaverGraph have an ID number that remain for the
            lifetime of the graph asset, even if that node is deleted. The ID
            number othe states are required to tell the StateWeaver which state
            to run.
          </p>

          <p>
            <strong>Nodes in Trash: </strong> Nodes are sent to the trash when
            deleted in the Editor Window. They can be viewed in the inspector by
            clicking the eye icon, or restored to the Editor Window by clicking
            the plus (+) icon.
          </p>
          <p>
            Longer-term Capacity sets the maximum number of nodes to store in
            trash that will never be deleted. Short-term Capacity sets the
            maximum number of nodes to store short term. This is helpful if the
            user accidentally deletes a large number of nodes. These nodes are
            cleared if they remain in the trash for longer than the Collection
            interval specified. Collections are performed to remove old nodes
            when the graph asset is opened.
          </p>

          <p class="mb-1">
            <strong>C# Enum Template: </strong> A C# enumeration is an easy way
            to keep track of the different states available in the graph. These
            enumeration values can be passed to the StateWeaver to run the
            associated states. Usage:
          </p>
          <code>
            weaver.SetTargetState((int)StateInWeaverGraph.Holstered_0);</code
          >
        </b-col>
        <b-col cols="12" lg="6">
          <b-img
            src="@/assets/img/products/StateWeaver/graph_inspector_window.jpg"
            alt="Weaver Graph Screenshot"
            class="mb-3"
            fluid
          ></b-img>
        </b-col>
      </b-row>

      <!-- State and Transition Inspector info Info -->
      <b-row class="mt-3 mb-2">
        <b-col>
          <h3>State and Transition Inspectors</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" lg="6">
          <h6>Transition Node</h6>
          <b-img
            src="@/assets/img/products/StateWeaver/state_inspector.jpg"
            alt="Weaver Graph Screenshot"
            class="mb-1"
            fluid
          ></b-img>
        </b-col>
        <b-col cols="12" lg="6">
          <h6>Transition Node</h6>
          <b-img
            src="@/assets/img/products/StateWeaver/transition_inspector.jpg"
            alt="Weaver Graph Screenshot"
            class="mb-1"
            fluid
          ></b-img>
        </b-col>
      </b-row>

      <b-row class="mt-3 mb-2">
        <b-col>
          <h3>Transition Types</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h6>Unidirectional</h6>
          <p>
            This is a one way transition. When the StateWeaver looks for a path
            from the currently running state to the targeted state, this
            transition will only be considered from the “From” to the “To”
            direction.
          </p>
          <b-img
            src="@/assets/img/products/StateWeaver/transition_type_unidirectional.jpg"
            alt="Weaver Graph Screenshot"
            class="mb-1"
            center
          ></b-img>
        </b-col>

        <b-col>
          <h6>Bidirectional - Symmetric</h6>
          <p>
            This is a two way transition. When the StateWeaver looks for a path
            from the currently running state to the targeted state, this
            transition can flow in either direction to complete the path
            generated by the StateWeaver. This two way transition is symmetric,
            meaning that the same components will be used for forward and
            reverse flow. As such, only one list of components is used.
          </p>
          <b-img
            src="@/assets/img/products/StateWeaver/transition_type_symmetric.jpg"
            alt="Weaver Graph Screenshot"
            class="mb-1"
            center
          ></b-img>
        </b-col>

        <b-col>
          <h6>Bidirectional - Asymmetric</h6>
          <p>
            This is a two way transition. When the StateWeaver looks for a path
            from the currently running state to the targeted state, this
            transition can flow in either direction to complete the path
            generated by the StateWeaver. This two way transition is asymmetric,
            meaning that a unique set of components will be used for forward and
            reverse flow. As such, only two lists of components are used, one
            for forward flow and one for reverse flow. Using a Bidirectional,
            Asymmetric transition is identical to using two separate
            Unidirectional transitions in opposite directions.
          </p>
          <b-img
            src="@/assets/img/products/StateWeaver/transition_type_asymmetric.jpg"
            alt="Weaver Graph Screenshot"
            class="mb-1"
            center
          ></b-img>
        </b-col>
      </b-row>

      <!-- StateWeaver Component Info -->
      <b-row>
        <b-col>
          <h3>StateWeaver Inspector</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" lg="6">
          <p class="mt-3">
            This is the component attached to a game object which contains a
            reference to a WeaverGraph asset. StateWeaver compiles the
            WeaverGraph asset into a usable object at runtime. Many StateWeaver
            components can reference the same graph.
          </p>

          <p>
            If the WeaverGraph has states with animation components, then an
            animation component with a controller must also be linked to the
            StateWeaver: See Animations.
          </p>

          <p>
            <strong>Animations: </strong> If animation components are used in
            any states in the graph asset, then an AnimationController must be
            referenced by the WeaverGraph.
          </p>
          <p>
            <em class="text-warning mr-1">
              Warning: AnimationControllers used by WeaverGraphs should be
              unique for each WeaverGraph asset!</em
            >
            <small class="text-warning-muted">
              The WeaverGraph Editor makes modifications to this
              AnimationController based on nodes with animation components. One
              WeaverGraph would overwrite the changes the 2nd makes if they
              share AnimationControllers, so no two Weaver Graphs should
              reference the same AnimationController.
            </small>
          </p>

          <p>
            Animation Clips and Blend Trees found in the states of the graph
            asset are automatically added to a managed layer in the
            AnimationController. By default, this layer is WEAVER_Default.
          </p>

          <p>
            If a StateWeaver references a WeaverGraph with animation components
            (and an Animation controller), an Animator component with a
            reference to the AnimatorController must be added to the
            StateWeaver’s game object or any of its child objects. A reference
            to this Animator and AnimatorController can be linked using the
            “Link Animator” button on the StateWeaver inspector window.
          </p>
        </b-col>
        <b-col cols="12" lg="6">
          <b-img
            src="@/assets/img/products/StateWeaver/stateweaver_component_inspector.jpg"
            alt="Weaver Graph Screenshot"
            class="mb-3"
            fluid
          ></b-img>
        </b-col>
      </b-row>

      <div class="divider-cinderscript"></div>

      <b-row class="mt-2">
        <b-col>
          <h2 class="text-center">Components</h2>

          <b-img
            src="@/assets/img/products/StateWeaver/component_list.jpg"
            alt="Weaver Graph Screenshot"
            class="mb-3"
            right
          ></b-img>

          <p>
            Components can be added to any State or Transition by clicking the
            plus symbol (+) in the Components section of that node's inspector
            window. Each component in the node's component list is executed when
            that state or transition becomes active at runtime.
          </p>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <h3 class="text-center">State Components</h3>

          <h5 center>Animation Clip</h5>
          <hr />
          <b-img
            src="@/assets/img/products/StateWeaver/state_component_animation.jpg"
            alt="Weaver Graph Screenshot"
            class="mb-3"
            fluid
          ></b-img>

          <p>
            Animation clips found here are automatically added to the
            AnimationController linked to this Weaver Graph in the specified
            layer.
          </p>

          <p>
            <strong>Clip:</strong> The animation clip that will be played. The
            GameObject with the StateWeaver must have an Animator component
            referencing the same AnimationController as this WeaverGraph.
          </p>
          <p>
            <strong>Layer Name:</strong> User specified layer, managed by
            StateWeaver, where this animation will be placed in the animation
            controller.
          </p>

          <h5>Blend Tree</h5>
          <hr />

          <b-img
            src="@/assets/img/products/StateWeaver/state_component_blend_tree.jpg"
            alt="Weaver Graph Screenshot"
            class="mb-3"
            fluid
          ></b-img>

          <p>
            The blend tree specified is added to the animation controller's
            layer managed by the StateWeaver.
          </p>

          <p>
            <strong>Controller:</strong> The source controller containing the
            Blend Tree to be located. The Blend Tree is copied from this source
            and added to this Weaver Graph's Animation Controller.
          </p>
          <p>
            <strong>State Name:</strong> The name of the source Blend Tree to be
            located and copied.
          </p>
          <p>
            <strong>Layer Name:</strong> User specified layer, managed by
            StateWeaver, where this animation will be placed in the animation
            controller.
          </p>

          <h5>Mono Script Routine</h5>
          <hr />

          <b-img
            src="@/assets/img/products/StateWeaver/state_component_mono_routine.jpg"
            alt="Weaver Graph Screenshot"
            class="mb-3"
            fluid
          ></b-img>

          <p>
            When this state becomes active, the specified MonoBehavior
            component's routine is executed on the GameObject running this
            StateWeaver. Routines are defined in a method with this siguature:
            <code>IEnumerator&lt;int&gt; RoutineName(WeaverState state);</code>
          </p>

          <p>
            <strong>Mono File:</strong> The source code file where the routine
            is defined.
          </p>
          <p>
            <strong>Method:</strong> Drop down list of methods in this code file
            that can be selected (i.e. have the correct method signature).
          </p>

          <h5>Script Object Routine</h5>
          <hr />

          <b-img
            src="@/assets/img/products/StateWeaver/state_component_script_routine.jpg"
            alt="Weaver Graph Screenshot"
            class="mb-3"
            fluid
          ></b-img>

          <p>
            When this state becomes active, the specified ScriptableObject's
            routine is executed. This is different from a Mono Script Routine in
            that the target of execution doesn't need to be linked to the
            GameObject this state is running on. The routine that is run belongs
            to the ScriptableObject specified. Routines are defined in a method
            with this siguature:
            <code>IEnumerator&lt;int&gt; RoutineName(WeaverState state);</code>
          </p>

          <p>
            <strong>Script Obj:</strong> The instansiated ScriptableObject asset
            file (not the code file).
          </p>
          <p>
            <strong>Method:</strong> Drop down list of methods associated with
            this asset that can be selected (i.e. have the correct method
            signature).
          </p>
        </b-col>

        <!-- List of Transition Components Included -->

        <b-col>
          <h3 class="text-center">Transition Components</h3>
          <h5>Curve Value Callback</h5>
          <hr />

          <b-img
            src="@/assets/img/products/StateWeaver/state_component_curve_value.jpg"
            alt="Weaver Graph Screenshot"
            class="mb-3"
            fluid
          ></b-img>

          <p>
            During this transition, the callback specified in user code is
            passed the value of the curve evaluated throughout the transition.
            The callback specified in user code must have the signature
            <code
              >void CallbackName(WeaverTransition transition, float
              curveValue);</code
            >
          </p>
          <p>
            <strong>Base Curve:</strong> The curve that will be sampled in a
            transition running forward (state A to state B).
          </p>
          <p>
            <strong>Modified Curve:</strong> The curve that will be sampled in a
            transition running in reverse (state B to state A). This is only
            used if the transition is Bidirectional - Symmetric.
          </p>
          <p>
            <strong>Invert:</strong> Determines if the modified curve is the
            inverse of the base curve.
          </p>
          <p>
            <strong>Mirror:</strong> Determines if the modified curve is the
            mirror of the base curve.
          </p>
          <p>
            <strong>Mono File:</strong> The source code file where the callback
            is defined.
          </p>
          <p>
            <strong>Method:</strong> Drop down list of methods in this code file
            that can be selected (i.e. have the correct method signature).
          </p>

          <h5>Mono Script Routine</h5>
          <hr />

          <b-img
            src="@/assets/img/products/StateWeaver/state_component_mono_routine.jpg"
            alt="Weaver Graph Screenshot"
            class="mb-3"
            fluid
          ></b-img>

          <p>
            When this transition becomes active, the specified MonoBehavior
            component's routine is executed on the GameObject running this
            StateWeaver. Routines are defined in a method with this siguature:
            <code
              >IEnumerator&lt;int&gt; RoutineName(WeaverTransition
              transition);</code
            >
          </p>

          <p>
            <strong>Mono File:</strong> The source code file where the routine
            is defined.
          </p>
          <p>
            <strong>Method:</strong> Drop down list of methods in this code file
            that can be selected (i.e. have the correct method signature).
          </p>

          <h5>Script Object Routine</h5>
          <hr />

          <b-img
            src="@/assets/img/products/StateWeaver/state_component_script_routine.jpg"
            alt="Weaver Graph Screenshot"
            class="mb-3"
            fluid
          ></b-img>

          <p>
            When this transition becomes active, the specified
            ScriptableObject's routine is executed. This is different from a
            Mono Script Routine in that the target of execution doesn't need to
            be linked to the GameObject this transition is running on. The
            routine that is run belongs to the ScriptableObject specified.
            Routines are defined in a method with this siguature:
            <code
              >IEnumerator&lt;int&gt; RoutineName(WeaverTransition
              transition);</code
            >
          </p>

          <p>
            <strong>Script Obj:</strong> The instansiated ScriptableObject asset
            file (not the code file).
          </p>
          <p>
            <strong>Method:</strong> Drop down list of methods associated with
            this asset that can be selected (i.e. have the correct method
            signature).
          </p>
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
