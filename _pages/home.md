---
layout: about
title: home
permalink: /
subtitle: UI/UX Designer | MEng in Architecture
# <a href='#'>Affiliations</a>. Address. Contacts. Moto. Etc.

# profile:
#   align: right
#   image: prof_pic.jpg
#   image_circular: true # crops the image to make it circular
#   # address: >
#   #   <p>555 your office number</p>
#   #   <p>123 your address street</p>
#   #   <p>Your City, State 12345</p>

news: false  # includes a list of news items
latest_posts: false  # includes a list of the newest posts
selected_papers: false # includes a list of papers marked as "selected={true}"
social: false  # includes social icons at the bottom of the page
display_categories: [some of my projects]
---

<p class="mt-4" style="font-weight:400;">I believe in the uniqueness of human experience and its right to be respected and expressed. <br><br>People are almost always multitasking, trying to balance thoughts, acts, emotions and interactions. <br>A good tech application for me, is the one that bridges and eases those complexities.<br>
</p>

<!-- to do -->
{% if true %}
<!-- pages/projects.md -->
<div class="projects">
{%- if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {%- for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_projects = site.projects | where: "category", category -%}
  {%- assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for project in sorted_projects -%}
      {% include projects_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_projects -%}
      {% include projects.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
  {% endfor %}

{%- else -%}
<!-- Display projects without categories -->
  {%- assign sorted_projects = site.projects | sort: "importance" -%}
  <!-- Generate cards for each project -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for project in sorted_projects -%}
      {% include projects_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_projects -%}
      {% include projects.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
{%- endif -%}
</div>


{% endif %}

<p class="mt-4" style="color:#747373; font-weight:400;">
I graduated as an Architect from the Polytechnic School of Athens (NTUA). Working as an architect, I explored my interest in interactions and the ways in which different complex user needs, can be facilitated in one environment. The focus on user needs and experiences and the importance of teamwork, have been great attributes later on to my practice as a designer of virtual environments.Currently, I design as part of a web development team.
</p>

<!-- button to projects -->
<div class="text-right">
  <a href="/projects" class="mt-4 btn-io">explore projects -></a>
</div>
<br>

<!-- [see all projects ->](/projects){: .btn-io .btn-io:hover } -->

{% if false %}
ex: Currently, I design as part of a web development team. By proposing designs that align with business goals and provide purposeful user experiences, I aim to bridge the gap between user needs and business objectives, delivering purposeful products. 

Write your biography here. Tell the world about yourself. Link to your favorite [subreddit](http://reddit.com). You can put a picture in, too. The code is already in, just name your picture `prof_pic.jpg` and put it in the `img/` folder.

Put your address / P.O. box / other info right below your picture. You can also disable any of these elements by editing `profile` property of the YAML header of your `_pages/about.md`. Edit `_bibliography/papers.bib` and Jekyll will render your [publications page](/al-folio/publications/) automatically.

Link to your social media connections, too. This theme is set up to use [Font Awesome icons](http://fortawesome.github.io/Font-Awesome/) and [Academicons](https://jpswalsh.github.io/academicons/), like the ones below. Add your Facebook, Twitter, LinkedIn, Google Scholar, or just disable all of them.
{% endif %}
