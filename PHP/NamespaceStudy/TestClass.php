<?php

namespace NamespaceStudy;

class TestClass
{
    var string $b;

    function test(string $param): void
    {
        echo $this->b = $param;
    }
}

//$a = new testClass();
//$a->test("x");