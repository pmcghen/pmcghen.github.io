<svelte:head>
  <title>Accessible Web Components - Pat McGhen | Full Stack Developer</title>
</svelte:head>

<h1>Accessible Web Components</h1>

<img src="/images/accessible-web-components.png" alt="">

<p>
  I was recently tasked with updating part of my employer's marketing website
  when I noticed some inconsistencies and errors implementing accessibility
  features on a tabbed ui component we use throughout the site. I took this as
  an oppurtunity to create a
  <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Components/Using_custom_elements">
    custom element
  </a> that would take the guesswork out of marking up this component.
</p>
<p>
  This custom element simplifies the tabs by expecting only 3 attributes: the
  tab trigger's <code>id</code>, the <code>target</code> tab's id, and whether
  the tab is <code>selected</code>. Under the hood, we add and manage
  <code>aria-</code> and <code>tabindex</code> attributes using vanilla
  javascript. This keeps the component easy to use in our HTML templates while
  ensuring accessibility is handled consistently and correctly.
</p>

<span class="code">HTML</span>
<pre>
&lt;vertical-tabs&gt;
  &lt;tabs-nav&gt;
      &lt;tab-trigger
          id="comprehensive-trigger"
          target="comprehensive-tab"
          selected="true"
      &gt;
          Tab Title
      &lt;/tab-trigger&gt;
  &lt;/tabs-nav&gt;
  &lt;tab-container
      id="comprehensive-tab"
  &gt;
      Tab Content
  &lt;/tab-container&gt;
&lt;/vertical-tabs&gt;
</pre>

<p>
  <a href="https://www.carnegielearning.com/solutions/math/middle-school-math-solution/">
    See the component in action
  </a>.
</p>
