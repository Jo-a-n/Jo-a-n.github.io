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


