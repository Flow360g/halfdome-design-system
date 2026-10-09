/* @ds-bundle: {"format":4,"namespace":"HalfDome","components":[{"name":"Logo"},{"name":"Dome"},{"name":"Tagline"},{"name":"BrandIcon"},{"name":"Arrow"},{"name":"ShapeImage"},{"name":"Button"},{"name":"Pill"},{"name":"SectionHeader"},{"name":"Statement"},{"name":"StatTile"},{"name":"InsightCard"},{"name":"FeatureBox"},{"name":"Quote"},{"name":"BarChart"},{"name":"DataTable"},{"name":"TeamMember"},{"name":"ContactBlock"},{"name":"Slide"}]} */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }

  // Uploaded brand marks, served from the design system's asset store.
  // Asset group -> file name (without .png) -> upload id in this design system's asset store.
  var BLOB = {}; // Filled with uploaded asset ids when this repo is imported into a Claude design system.
  var config = { useBlobs: false, blobBase: '/_blob/', assetBase: '../../assets/' };
  // In a git checkout assets load from assetBase (relative to a components/<Name>/ page). Inside a Claude design system the BLOB map holds upload ids and useBlobs is true.
  function markPath(key) {
    var p = key.split('-'), kind = p.shift(), rest = p.join('-');
    if (kind === 'Logo') return 'Logos/Halfdome-Logo-' + rest + '.png';
    if (kind === 'Dome') return 'Dome/Dome-' + rest + '.png';
    return 'Tagline/Whole-Potential-' + rest + '.png';
  }
  function blobId(path) {
    var i = path.indexOf('/'), g = BLOB[path.slice(0, i)];
    return g ? g[path.slice(i + 1).replace(/\.png$/, '')] : undefined;
  }
  function asset(path) {
    var id = config.useBlobs && blobId(path);
    return id ? config.blobBase + id : config.assetBase + path;
  }
  function blob(key) {
    var path = markPath(key);
    if (config.useBlobs && !blobId(path)) return null;
    return asset(path);
  }
  var COLOUR_FILE = { red: 'Red', purple: 'Purple', gold: 'Green', green: 'Green', white: 'White', black: 'Black' };
  function cap(s) { return COLOUR_FILE[s] || 'Red'; }
  // Marks default to the ink that reads on the current theme.
  function isDark() { var el = document.documentElement; return !!el && el.getAttribute('data-theme') === 'dark'; }
  function defaultInk(ink) { return ink || (isDark() ? 'white' : 'black'); }

  /* ---------- Brand marks ---------- */

  function Logo(props) {
    var ink = defaultInk(props.ink) === 'white' ? 'White' : 'Black';
    var dome = props.dome === null ? null : cap(props.dome || 'red');
    var key = 'Logo-' + ink + (dome && dome !== ink ? '-' + dome : '');
    if (props.ink === 'red') key = 'Logo-Red-Black';
    var src = blob(key) || blob('Logo-Black-Red');
    return h('img', { className: cx('hd-logo', props.className), src: src, alt: 'Half Dome', style: { height: props.height || 32 } });
  }

  function Dome(props) {
    var key = 'Dome-' + cap(props.colour || 'red');
    return h('img', { className: cx('hd-dome', props.className), src: blob(key), alt: '', 'aria-hidden': true, style: { width: props.size || 64 } });
  }

  function Tagline(props) {
    var text = defaultInk(props.ink) === 'white' ? 'White' : 'Black';
    var dome = cap(props.dome || 'red');
    var key = 'Tagline-' + text + '-' + dome;
    var src = blob(key) || asset('Tagline/Whole-Potential-' + text + '-' + dome + '.png');
    return h('img', { className: cx('hd-tagline', props.className), src: src, alt: 'Whole Potential.', style: { height: props.height || 240 } });
  }

  function BrandIcon(props) {
    var file = props.name + '-' + cap(props.colour || 'red') + '.png';
    return h('img', { className: cx('hd-icon', props.className), src: props.src || asset('Icons/' + file), alt: props.label || '', 'aria-hidden': props.label ? undefined : true, style: { width: props.size || 64, height: props.size || 64 } });
  }

  function Arrow(props) {
    var file = 'Arrow-' + (defaultInk(props.ink) === 'white' ? 'White' : 'Black') + (props.variant || 9) + '.png';
    return h('img', { className: cx('hd-arrow', props.className), src: asset('Arrows/' + file), alt: '', 'aria-hidden': true, style: { width: props.width || 120 } });
  }

  function ShapeImage(props) {
    var shape = props.shape || 4;
    var mask = 'url(' + asset('Shapes/Shape-Black' + shape + '.png') + ')';
    var colour = cap(props.colour || 'red');
    // The library has Red 1 to 5 and Purple 2 to 6; fall back to the nearest available shape.
    if (colour === 'Red' && shape === 6) shape = 5;
    if (colour === 'Purple' && shape === 1) shape = 2;
    mask = 'url(' + asset('Shapes/Shape-Black' + shape + '.png') + ')';
    var cutout = !props.mask || !props.src;
    var backdrop = cutout ? h('img', { className: 'hd-shape-backdrop', src: asset('Shapes/Shape-' + colour + shape + '.png'), alt: '', 'aria-hidden': true }) : null;
    var photo = null;
    if (props.src) {
      photo = cutout
        ? h('img', { className: 'hd-shape-cutout', src: props.src, alt: props.alt || '' })
        : h('img', { className: 'hd-shape-photo', src: props.src, alt: props.alt || '', style: { WebkitMaskImage: mask, maskImage: mask } });
    }
    return h('div', { className: cx('hd-shape', props.className), style: { width: props.width || 360 } }, backdrop, photo);
  }

  /* ---------- Actions and labels ---------- */

  function Button(props) {
    var variant = props.variant || 'primary';
    var rest = {};
    for (var k in props) if (k !== 'variant' && k !== 'className' && k !== 'children') rest[k] = props[k];
    rest.className = cx('hd-btn', 'hd-btn-' + variant, props.className);
    return h(props.href ? 'a' : 'button', rest, props.children);
  }

  function Pill(props) {
    return h('span', { className: cx('hd-pill', 'hd-pill-' + (props.tone || 'neutral'), props.className) }, props.children);
  }

  /* ---------- Type patterns ---------- */

  function SectionHeader(props) {
    return h('header', { className: cx('hd-section', props.className) },
      props.eyebrow ? h('p', { className: 'hd-eyebrow' }, props.eyebrow) : null,
      h(props.level === 2 ? 'h2' : 'h1', { className: props.level === 2 ? 'hd-h2' : 'hd-h1' }, props.title),
      props.intro ? h('p', { className: 'hd-intro' }, props.intro) : null
    );
  }

  function Statement(props) {
    var text = String(props.children || '');
    if (text && !/[.!?]$/.test(text)) text += '.';
    return h('p', { className: cx('hd-statement', 'hd-tone-' + (props.colour || 'red'), props.className) }, text);
  }

  /* ---------- Data ---------- */

  function StatTile(props) {
    var dir = props.delta == null ? null : (String(props.delta).trim().charAt(0) === '-' ? 'down' : 'up');
    return h('div', { className: cx('hd-stat', props.emphasis && 'hd-stat-emphasis', props.className) },
      h('p', { className: 'hd-stat-label' }, props.label),
      h('p', { className: 'hd-stat-value' }, props.value),
      props.delta != null ? h('p', { className: 'hd-stat-delta hd-delta-' + dir }, h('span', { 'aria-hidden': true }, dir === 'up' ? '▲ ' : '▼ '), props.delta, props.period ? h('span', { className: 'hd-stat-period' }, ' ' + props.period) : null) : null
    );
  }

  function InsightCard(props) {
    return h('article', { className: cx('hd-insight', props.className) },
      h('p', { className: 'hd-insight-num' }, 'Insight ' + (props.number || 1) + ':'),
      h('p', { className: 'hd-insight-body' }, props.children)
    );
  }

  function FeatureBox(props) {
    return h('article', { className: cx('hd-feature', props.className) },
      props.icon ? h(BrandIcon, { name: props.icon, colour: props.colour, size: 72 }) : null,
      h('h3', { className: 'hd-h3' }, props.title),
      h('p', { className: 'hd-body' }, props.children)
    );
  }

  function Quote(props) {
    return h('figure', { className: cx('hd-quote', props.className) },
      h('blockquote', null, '“' + props.children + '”'),
      props.by ? h('figcaption', null, props.by) : null
    );
  }

  function BarChart(props) {
    var data = props.data || [];
    var series = props.series || [];
    var w = props.width || 560, ht = props.height || 280, pad = 32, base = ht - 28;
    var max = 0;
    data.forEach(function (d) { series.forEach(function (s) { if (d[s] > max) max = d[s]; }); });
    max = max || 1;
    var groupW = (w - pad) / Math.max(1, data.length);
    var barW = Math.min(36, (groupW - 16) / Math.max(1, series.length));
    var kids = [];
    [0, 0.5, 1].forEach(function (f, i) {
      var y = base - f * (base - 12);
      kids.push(h('line', { key: 'g' + i, x1: pad, x2: w, y1: y, y2: y, className: 'hd-chart-grid' }));
    });
    data.forEach(function (d, i) {
      var gx = pad + i * groupW + (groupW - barW * series.length) / 2;
      series.forEach(function (s, j) {
        var bh = (d[s] / max) * (base - 12);
        kids.push(h('rect', { key: i + '-' + j, x: gx + j * barW, y: base - bh, width: barW - 4, height: bh, rx: 3, className: 'hd-chart-s' + (j + 1) }));
      });
      kids.push(h('text', { key: 'l' + i, x: pad + i * groupW + groupW / 2, y: ht - 8, textAnchor: 'middle', className: 'hd-chart-label' }, d.label));
    });
    return h('figure', { className: cx('hd-chart', props.className) },
      h('svg', { viewBox: '0 0 ' + w + ' ' + ht, width: '100%', role: 'img', 'aria-label': props.title || 'Bar chart' }, kids),
      h('figcaption', { className: 'hd-chart-legend' }, series.map(function (s, j) {
        return h('span', { key: s }, h('i', { className: 'hd-chart-key hd-chart-s' + (j + 1) }), s);
      }))
    );
  }

  function DataTable(props) {
    var cols = props.columns || [];
    return h('table', { className: cx('hd-table', props.className) },
      h('thead', null, h('tr', null, cols.map(function (c) { return h('th', { key: c.key, className: c.numeric ? 'hd-num' : null }, c.label); }))),
      h('tbody', null, (props.rows || []).map(function (r, i) {
        return h('tr', { key: i }, cols.map(function (c) { return h('td', { key: c.key, className: c.numeric ? 'hd-num' : null }, r[c.key]); }));
      }))
    );
  }

  /* ---------- People and contact ---------- */

  function TeamMember(props) {
    return h('div', { className: cx('hd-member', props.className) },
      h(ShapeImage, { src: props.photo, shape: props.shape || 4, colour: props.colour || 'red', width: 200, alt: props.name }),
      h('p', { className: 'hd-member-name' }, props.name),
      h('p', { className: 'hd-member-title' }, props.title)
    );
  }

  function ContactBlock(props) {
    return h('address', { className: cx('hd-contact', 'hd-tone-' + (props.colour || 'red'), props.className) },
      h('span', null, props.address || 'Level 8/459 Church St,'), h('br'),
      h('span', null, props.suburb || 'Richmond VIC 3121'), h('br'), h('br'),
      props.phone ? h('span', null, 'Ph: ' + props.phone) : null, props.phone ? h('br') : null,
      h('span', null, props.web || 'halfdome.com.au')
    );
  }

  /* ---------- Slides ---------- */

  // Slide grounds and the marks that read on each (from the Half Dome deck template).
  // Every coloured ground takes snow titles and a white logo; dark here means light ink.
  var GROUNDS = {
    snow:   { dark: false, logoDome: 'red',    bigDome: 'red',    shape: 'red' },
    black:  { dark: true,  logoDome: 'purple', bigDome: 'purple', shape: 'red' },
    red:    { dark: true,  logoDome: 'purple', bigDome: 'white',  shape: 'purple' },
    purple: { dark: true,  logoDome: 'gold',   bigDome: 'red',    shape: 'red' },
    gold:   { dark: true,  logoDome: 'red',    bigDome: 'red',    shape: 'red' }
  };
  var DEFAULT_GROUND = { cover: 'black', divider: 'red', closing: 'red' };

  function Slide(props) {
    var layout = props.layout || 'content';
    if (layout === 'title') layout = 'cover';
    var ground = props.ground || (props.theme === 'dark' ? 'black' : DEFAULT_GROUND[layout] || 'snow');
    if (!GROUNDS[ground]) ground = 'snow';
    var g = GROUNDS[ground];
    var ink = props.ink || (g.dark ? 'snow' : 'black');
    var lightInk = ink === 'snow';
    var dome = props.accent || g.logoDome;
    var dense = !!props.dense && layout === 'content';
    var rule = props.rule != null ? props.rule : (layout !== 'cover' && !dense);
    var children = [];
    var logo = function (height, cls) { return h(Logo, { key: 'logo', ink: lightInk ? 'white' : 'black', dome: dome, height: height, className: cls }); };

    if (layout !== 'cover' && !dense) {
      children.push(h('header', { key: 'hd', className: cx('hd-slide-header', rule && 'hd-slide-header-rule') }, logo(52)));
    }

    if (layout === 'cover' || layout === 'divider' || layout === 'closing') {
      children.push(h('div', { key: 'tb', className: 'hd-slide-title-block hd-slide-title-' + layout },
        layout === 'cover' ? logo(64, 'hd-slide-cover-logo') : null,
        h('h1', { className: 'hd-slide-hero' }, props.title || (layout === 'closing' ? 'Thank you!' : '')),
        props.subtitle ? h('p', { className: 'hd-slide-subtitle' }, props.subtitle) : null,
        props.date && layout === 'cover' ? h('p', { className: 'hd-slide-date' }, props.date) : null));
      if (props.image) {
        children.push(h('div', { key: 'img', className: 'hd-slide-image' },
          h(ShapeImage, { src: props.image, shape: props.shape || 2, colour: props.shapeColour || g.shape, width: 1040 })));
      } else if (layout !== 'cover') {
        children.push(h(Dome, { key: 'bigdome', colour: props.domeColour || g.bigDome, size: 680, className: 'hd-slide-bigdome' }));
      }
      children.push(h(Tagline, { key: 'tag', ink: lightInk ? 'white' : 'black', dome: dome, height: 300, className: 'hd-slide-tagline' }));
    } else if (layout === 'statement') {
      children.push(h(Statement, { key: 's', colour: props.accent || 'red', className: 'hd-slide-statement' }, props.title));
    } else if (layout === 'quote') {
      children.push(h(Quote, { key: 'q', by: props.by }, props.title));
    } else {
      children.push(h('h1', { key: 'h', className: 'hd-slide-headline' }, props.title));
      children.push(h('div', { key: 'b', className: 'hd-slide-content' }, props.children));
    }

    if (dense) {
      var corner = props.logoCorner === 'bottom-right' ? 'right' : 'left';
      children.push(h('footer', { key: 'f', className: 'hd-slide-footer hd-slide-footer-' + corner }, logo(28),
        props.date && corner === 'left' ? h('span', { className: 'hd-slide-date' }, props.date) : null));
    } else if (props.date && layout !== 'cover') {
      children.push(h('span', { key: 'd', className: 'hd-slide-date hd-slide-date-corner' }, props.date));
    }

    return h('section', {
      className: cx('hd-slide', 'hd-layout-' + layout, 'hd-ground-' + ground, lightInk ? 'hd-ink-snow' : 'hd-ink-black', dense && 'hd-slide-dense', props.className),
      'data-accent': dome, 'data-theme': g.dark ? 'dark' : 'light'
    }, children);
  }

  var api = {
    config: config, Logo: Logo, Dome: Dome, Tagline: Tagline, BrandIcon: BrandIcon, Arrow: Arrow, ShapeImage: ShapeImage,
    Button: Button, Pill: Pill, SectionHeader: SectionHeader, Statement: Statement, StatTile: StatTile,
    InsightCard: InsightCard, FeatureBox: FeatureBox, Quote: Quote, BarChart: BarChart, DataTable: DataTable,
    TeamMember: TeamMember, ContactBlock: ContactBlock, Slide: Slide
  };
  window.HalfDome = window.HalfDome || {};
  for (var key in api) window.HalfDome[key] = api[key];
})();
