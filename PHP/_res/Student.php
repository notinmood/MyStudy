<?php
/**
 * @file   : Student.php
 * @time   : 22:05
 * @date   : 2021/10/5
 * @emailto: 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */


namespace PHP\Study\_res;

class Student
{
    /**
     * @var string
     */
    private string $name;

    /**
     * @var int
     */
    private int $age;


    public function __construct($name,$age)
    {
        $this->age=$age ;
        $this->name=$name;
    }

    public function getName(): string
    {
        return $this->name;
    }
}