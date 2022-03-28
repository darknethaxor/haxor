if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
}

__d("Rect", ["invariant", "$", "Vector", "react"], (function(a, b, c, d, e, f, g, h) {
    d("react");
    a = function() {
        function a(b, d, e, f, g) {
            if (arguments.length === 1) {
                if (b instanceof a) return b;
                if (b instanceof c("Vector")) return new a(b.y, b.x, b.y, b.x, b.domain);
                typeof b === "string" && (b = c("$")(b));
                return a.getElementBounds(b)
            }
            typeof b === "number" && typeof d === "number" && typeof e === "number" && typeof f === "number" && (!g || typeof g === "string") || h(0, 1087);
            Object.assign(this, {
                t: b,
                r: d,
                b: e,
                l: f,
                domain: g || "pure"
            });
            return this
        }
        var b = a.prototype;
        b.w = function() {
            return this.r - this.l
        };
        b.h = function() {
            return this.b - this.t
        };
        b.getWidth = function() {
            return this.w()
        };
        b.getHeight = function() {
            return this.h()
        };
        b.toString = function() {
            return "((" + this.l + ", " + this.t + "), (" + this.r + ", " + this.b + "))"
        };
        b.contains = function(b) {
            b = new a(b).convertTo(this.domain);
            var c = this;
            return c.l <= b.l && c.r >= b.r && c.t <= b.t && c.b >= b.b
        };
        b.intersection = function(b) {
            b = b.convertTo(this.domain);
            var c = Math.min(this.b, b.getBottom()),
                d = Math.max(this.l, b.getLeft()),
                e = Math.min(this.r, b.getRight());
            b = Math.max(this.t, b.getTop());
            return c > b && e > d ? new a(b, e, c, d) : null
        };
        b.isEqualTo = function(a) {
            return this.t === a.t && this.r === a.r && this.b === a.b && this.l === a.l && this.domain === a.domain
        };
        b.add = function(b, d) {
            if (arguments.length == 1) {
                b instanceof a && b.domain != "pure" && (b = b.convertTo(this.domain));
                return b instanceof c("Vector") ? this.add(b.x, b.y) : this
            }
            var e = parseFloat(b),
                f = parseFloat(d);
            return new a(this.t + f, this.r + e, this.b + f, this.l + e, this.domain)
        };
        b.sub = function(a, b) {
            if (arguments.length == 1 && a instanceof c("Vector")) return this.add(a.mul(-1));
            else if (typeof a === "number" && typeof b === "number") return this.add(-a, -b);
            return this
        };
        b.rotateAroundOrigin = function(b) {
            var c = this.getCenter().rotate(b * Math.PI / 2),
                d = 0;
            b % 2 ? (d = this.h(), b = this.w()) : (d = this.w(), b = this.h());
            var e = c.y - b / 2;
            c = c.x - d / 2;
            b = e + b;
            d = c + d;
            return new a(e, d, b, c, this.domain)
        };
        b.boundWithin = function(a) {
            var b = 0,
                c = 0;
            this.l < a.l ? b = a.l - this.l : this.r > a.r && (b = a.r - this.r);
            this.t < a.t ? c = a.t - this.t : this.b > a.b && (c = a.b - this.b);
            return this.add(b, c)
        };
        b.getCenter = function() {
            return new(c("Vector"))(this.l + this.w() / 2, this.t + this.h() / 2, this.domain)
        };
        b.getTop = function() {
            return this.t
        };
        b.getRight = function() {
            return this.r
        };
        b.getBottom = function() {
            return this.b
        };
        b.getLeft = function() {
            return this.l
        };
        b.getArea = function() {
            return (this.b - this.t) * (this.r - this.l)
        };
        b.getPositionVector = function() {
            return new(c("Vector"))(this.l, this.t, this.domain)
        };
        b.getDimensionVector = function() {
            return new(c("Vector"))(this.w(), this.h(), "pure")
        };
        b.convertTo = function(b) {
            if (this.domain == b) return this;
            if (b == "pure") return new a(this.t, this.r, this.b, this.l, "pure");
            if (this.domain == "pure") return new a(0, 0, 0, 0);
            var d = new(c("Vector"))(this.l, this.t, this.domain).convertTo(b);
            return new a(d.y, d.x + this.w(), d.y + this.h(), d.x, b)
        };
        a.deserialize = function(b) {
            b = b.split(":");
            return new a(parseFloat(b[1]), parseFloat(b[2]), parseFloat(b[3]), parseFloat(b[0]))
        };
        a.newFromVectors = function(b, c) {
            return new a(b.y, b.x + c.x, b.y + c.y, b.x, b.domain)
        };
        a.getElementBounds = function(b) {
            return a.newFromVectors(c("Vector").getElementPosition(b), c("Vector").getElementDimensions(b))
        };
        a.getViewportBounds = function() {
            return a.newFromVectors(c("Vector").getScrollPosition(), c("Vector").getViewportDimensions())
        };
        a.getViewportWithoutScrollbarsBounds = function() {
            return a.newFromVectors(c("Vector").getScrollPosition(), c("Vector").getViewportWithoutScrollbarDimensions())
        };
        a.minimumBoundingBox = function(b) {
            var c = new a(Infinity, -Infinity, -Infinity, Infinity),
                d;
            for (var e = 0; e < b.length; e++) d = b[e], c.t = Math.min(c.t, d.t), c.r = Math.max(c.r, d.r), c.b = Math.max(c.b, d.b), c.l = Math.min(c.l, d.l);
            return c
        };
        return a
    }();
    g["default"] = a
}), 98);