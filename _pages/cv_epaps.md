---
layout: default
permalink: /cv/
title: cv
nav: true
nav_order: 5
---

<div class="post">
    <header class="post-header">
        <h3 class="post-title">Short CV </h3>
    </header>          
    <article>
        <div class="cv">
            {% for entry in site.data.cv_epaps %}
            <div class="card mt-3 p-3">
                <h4 class="card-title font-weight-medium; text-align-center;">{{ entry.title }}</h4>
                <div>                    
                    {% include cv/time_table_epaps.html %}
                </div>
            </div>
            {% endfor %}
        </div>
    </article>
</div>

A full CV can be found [here](None).


