<?php
/**
 * @file   : PersonDirector.php
 * @time   : 16:38
 * @date   : 2021/8/14
 * @emailto: 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

namespace PHP\Study\PatternStudy\Builder01;


// 我们还缺Builder模式中一个非常重要的类，指挥者(Director)，用它来控制建造过程，也用来隔离用户与建造过程的关联。
class PersonDirector
{
    private BuilderPerson $pb;

    public function __construct(BuilderPerson $pb)
    {
        $this->pb = $pb;
    }

    //建造的过程在指挥者这里完成，用户就不需要知道了
    public function createPerson()
    {
        $this->pb->buildHead();
        $this->pb->buildBody();
        $this->pb->buildLeftArm();
        $this->pb->buildRightArm();
        $this->pb->buildLeftLeg();
        $this->pb->buildRightLeg();
    }
}