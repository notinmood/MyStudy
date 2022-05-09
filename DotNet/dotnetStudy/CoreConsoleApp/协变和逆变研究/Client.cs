using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CoreConsoleApp.协变和逆变研究.RES;

namespace CoreConsoleApp.协变和逆变研究
{
    internal class Client
    {
        public static void index()
        {
            MyDelegation myFunc = Biz.DisplayInformation;
            myFunc("zhangsan");

            //MyActionA<string> myActionA = new MyActionCommon<string>(Biz.DisplayInformation);
            MyActionCommon<string> myActionString = new(Biz.DisplayInformation);
            myActionString("qingdao");

            MyActionCommon<object> myActionObject = new(Biz.DoSomething);
            myActionObject("qingdao");
            //myActionB(bool);


            // 1. 使用未指定协变逆变的委托。其不能将有派生关系的其他类型声明的委托赋给目标类型声明的委托。
            MyActionCommon<B> myActionB = new(Biz.DoSomething);

            MyActionCommon<A> myActionA = new(Biz.DoSomething);
            MyActionCommon<C> myActionC = new(Biz.DoSomething);

            //// 以下赋值都会出现问题。
            //myActionB = myActionC;
            //myActionB = myActionA;

            myActionB(new B());
            myActionB(new C());
            ////以下无法编译通过
            //myActionB(new A());

            //══════════════════════════

            MyActionIn<B> myActionInB = null;
            MyActionIn<A> myActionInA = new MyActionIn<A>(Biz.DoSomething);
            MyActionIn<C> myActionInC = new(Biz.DoSomething);

            myActionInB = myActionInA;
            //// 2. 以下不成立
            //myActionInB = myActionInC;
        }
    }
}
