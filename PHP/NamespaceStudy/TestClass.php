<?php

namespace NamespaceStudy;

class TestClass
{
    var $b;

    function test(string $param)
    {
        echo $this->b = $param;
    }
}

//$a = new testClass();
//$a->test("x");