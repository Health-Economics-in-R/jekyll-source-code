---
layout: home
---

<div class="jumbotron">
  <h1 class="display-4">{{ site.title }} <span markdown="1">
                                         ![image-title-here](/assets/images/logo_transparent.jpg){:height="100px" width="100px"}
                                         </span></h1>
  <p class="lead">{{ site.description }}</p>
</div>

## Aim

* Provide easy to use tools for standard health economics methods
* Enhance current tools functionality
* Speed-up analysis time
* Reduce errors
* Improve reproducability

<h2>Latest news</h2>
{% for post in site.posts %}
   <div>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <p class="text-muted">{{ post.date | date_to_string }}</p>
   </div>
{% endfor %}
