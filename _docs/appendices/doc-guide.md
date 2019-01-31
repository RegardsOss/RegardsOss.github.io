---
layout: classic-docs
title: Documentation guide
short-title: Design concepts
categories:
  - development
---

{% include toc.md %}

## Deploy documentation locally

1. Clone documentation repository
1. From repository folder, run `docker-compose up`
1. Open your browser to http://localhost:4000 

Sometimes, documentation does not reload completely on update. To clean generated site :

```sh
# Stop docker compose or stop docker container
# Remove generated site
rm -rf _site
# Restart compose
docker-compose up
```

## Kramdown

Documentation is written in [Kramdown](https://kramdown.gettalong.org ).

### Kramdown table of content (TOC)

Add following documentation snippet to the top of your page to automatically generate page TOC.

```md
{% raw %}{% include toc.md %}{% endraw %}
```

This snippet contains an unordered table of content :

```md
{% include toc.md %}
```

See [documentation](https://kramdown.gettalong.org/converter/html.html#toc) for further details.

## Additional block styling

To highlight block, add styling properties to blockquote.


```md
> It's an information!
{: .tip .info}
```

> It's an information!
{: .tip .info}

```md
> It's a warning!
{: .tip .warning}
```

> It's a warning!
{: .tip .warning}

```md
> It's a todo!
{: .tip .todo}
```

> It's a todo!
{: .tip .todo}

```md
> It's a checklist!
{: .tip .checklist}
```

> It's a checklist!
{: .tip .checklist}

```md
> It's a plus!
{: .tip .plus}
```

> It's a plus!
{: .tip .plus}

```md
> It's important!
{: .tip .important}
```

> It's important!
{: .tip .important}

## Page template

> Describe front matter, toc, markdown headers
{: .tip .todo}
