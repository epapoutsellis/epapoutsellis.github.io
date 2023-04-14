---
layout: page
permalink: /publications/
title: publications
nav: true
nav_order: 3
---


<h3 style="text-align: center;"><b>Preprints</b></h3>

<div class="publications">
    {% bibliography -f papers -q @preprint %}
</div>

<h3 style="text-align: center;"><b>Journal papers</b></h3>

<div class="publications">
    {% bibliography -f papers -q @article %}
</div>

<h3 style="text-align: center;"><b>Peer reviewed conference proceedings</b></h3> 

<div class="publications">
    {% bibliography -f papers -q @inproceedings %}
</div>

<h3 style="text-align: center;"><b>Datasets</b></h3>

<div class="publications">
    {% bibliography -f papers -q @dataset %}
</div>

<h3 style="text-align: center;"><b>PhD Thesis</b></h3> 

<div class="publications">
    {% bibliography -f papers -q @phdthesis %}
</div>

<div style="text-align: left">
    <nobr>(AO): </nobr> Alphabetical order.<br>
    <nobr>(CO): </nobr> Contribution order.<br>
    <nobr>(LAPIO): </nobr> Lead author, Alphabetical order, Principal Investigator as last author.<br>
</div>    


