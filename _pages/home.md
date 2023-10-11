---
layout: home
title: home
permalink: /
# subtitle: Welcome to my portfolio!
display_categories: [my work_]
social: false  # includes social icons at the bottom of the page
welcome: Hi there, I’m Ioanna! <br><s>an architect</s> <br>a UI/UX Designer.
# <a href='#'>Affiliations</a>. Address. Contacts. Moto. Etc.

# profile:
#   align: right
#   image: prof_pic.jpg
#   image_circular: true # crops the image to make it circular
#   # address: >
#   #   <p>555 your office number</p>
#   #   <p>123 your address street</p>
#   #   <p>Your City, State 12345</p>
---

<!-- pages/projects.md -->
<div class="projects">
{%- if site.enable_project_categories and page.display_categories %}
  
  <!-- Generate cards for each project -->
  
  {% if page.horizontal -%}
    <!-- Display categorized projects -->
    {%- for category in page.display_categories %}
    <h2 class="category cta">{{ category }}
      <div class="text-right cta">
        <a href="/projects" class="btn-io">explore projects -></a>
      </div>
    </h2>
    {%- assign categorized_projects = site.projects | where: "category", category -%}
    {%- assign sorted_projects = categorized_projects | sort: "importance" %}
    {% endfor %}
  <div class="container">
    <div class="row row-cols-2">
    {%- for project in sorted_projects -%}
      {% include projects_horizontal.html %}
    {%- endfor %}
    </div>
  </div>

  {%- else -%}
    <div class="gallery-wrapper">
      <!-- Display categorized projects -->
      {%- for category in page.display_categories %}
      <h2 class="category cta">{{ category }}
        <div class="text-right cta">
          <a href="/projects" class="btn-io">explore projects -></a>
        </div>
      </h2>
      {%- assign categorized_projects = site.projects | where: "category", category -%}
      {%- assign sorted_projects = categorized_projects | sort: "importance" %}
      {% endfor %}
    <div class="gallery">
      {%- for project in sorted_projects -%}
       {% include projects_home.html %}
      {%- endfor %}
    </div>
  </div>

  {%- endif -%}
{%- endif -%}

<br>
<br>
<h2 class="category cta">{{ "people_" }}
    <div class="text-right cta">
      <a href="/cv" class="btn-io">cv -></a>
    </div>
</h2>
<br>
<div class="fl-container fl-right">
  <div class="txt-right">
    <p>What I like most about the UX field is that it stands <b><i>in between.</i></b></p>
    <p>
    The unique position of UX, acts as a junction point between business, marketing, and development. By collaborating with people in diverse projects from different domains, I learn and explore knowledge, experiences and methodologies beyond the UX field.<br>
    <b>Sharing different experiences, mindsets and goals through work</b>, is the best part of UX for me.
    </p>
    <p>I've collaborated in various company web projects, each adding to my journey in the field.</p>
  </div>
</div>

<div class="row mt-4 mx-2 mx-md-0">
  <img class="col-6 col-md-2" src = "/assets/icn/1.svg" alt="UNI-PHARMA logo"/>
  <img class="col-6 col-md-2" src = "/assets/icn/2.svg" alt="Dipylon logo"/>
  <img class="col-6 col-md-2" src = "/assets/icn/3.svg" alt="Dromeas Eshop logo"/>
  <img class="col-6 col-md-2" src = "/assets/icn/4.svg" alt="CGWorks logo"/>
  <img class="col-6 col-md-2" src = "/assets/icn/5.svg" alt="Intercomm Foods logo"/>
  <img class="col-6 col-md-2" src = "/assets/icn/6.svg" alt="elite strom logo"/>
</div>
