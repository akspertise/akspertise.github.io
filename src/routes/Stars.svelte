<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>

<style lang="scss">
@function random_range($min, $max) {
    $rand: random();
    $random_range: $min + floor($rand * (($max - $min) + 1));
    @return $random_range;
}

$colors: ((#486bdc, #3951a3), (#3446bb, #273488), (#0e38c2, #04207c), (#7a34bb, #4f2788));

.star {
    will-change: transform, opacity;
    $total: 90; // Total number of planets
    position: relative;
    width: 100vw;
    height: 100vh;
    filter: drop-shadow(0 0 1px #1f3474);

    @for $i from 1 through $total {
        $distance: 3px;
        $duration: 7s;
        $size: 1px;
        $random-size: random_range(2, 4) * $size; // Random size
        $random-duration: random_range(10, 25) * $duration; // Random duration for rotation
        $random-delay: random(30) * -$duration; // Random delay for animation start
        $random-distance: random_range(30, 170) * $distance; // Random distance from the center
        $random-top: random(100); // Random top position percentage
        $random-color: nth($colors, random(length($colors)));

        &:nth-child(#{$i}) {
            width: $random-size;
            height: $random-size;
            background: radial-gradient(circle, $random-color);
            border-radius: 50%;
            position: absolute;
            top: 100%;
            left: 50%;
            animation: rotate-#{$i} $random-duration $random-delay cubic-bezier(.5,.35,.5,.65) infinite, opacity-#{$i} $random-duration $random-delay linear infinite;
            
            &:before {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                width: 100%;
                height: 100%;
                transform: translate(-50%, -50%);
            }
        }

        @keyframes rotate-#{$i} {
            0% {
                transform: rotate(-0.02turn) translateX(-$random-distance);
            }
            60% {
                transform: rotate(0.20turn) translateX(calc($random-distance/-1.3));
            }
            100% {
                transform: rotate(0.52turn) translateX(-$random-distance);
            }
        }
        @keyframes opacity-#{$i} {
            0% {
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                opacity: 0;
            }
        }
    }
}
</style>