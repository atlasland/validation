import { asserts } from "./dev_deps.ts";
import { email } from "./mod.ts";

const { assertEquals } = asserts;

Deno.test("should pass on valid email addresses", () => {
  assertEquals(email.valid("test@example.com"), true);
  assertEquals(email.valid("support@subdomain.example.com"), true);
  assertEquals(email.valid("first.last@iana.org"), true);
  assertEquals(
    email.valid(
      "1234567890123456789012345678901234567890123456789012345678901234@iana.org",
    ),
    true,
  );
  assertEquals(email.valid("first.last@sub.do,com"), true);
  assertEquals(email.valid("first@last@iana.org"), true);
  assertEquals(
    email.valid(
      "x@x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x2",
    ),
    true,
  );
  assertEquals(
    email.valid(
      "1234567890123456789012345678901234567890123456789012345678@12345678901234567890123456789012345678901234567890123456789.12345678901234567890123456789012345678901234567890123456789.123456789012345678901234567890123456789012345678901234567890123.iana.org",
    ),
    true,
  );
  assertEquals(
    email.valid(
      "first.last@x23456789012345678901234567890123456789012345678901234567890123.iana.org",
    ),
    true,
  );
  assertEquals(email.valid("first.last@3com.com"), true);
  assertEquals(email.valid("first.last@123.iana.org"), true);
  assertEquals(
    email.valid(
      "123456789012345678901234567890123456789012345678901234567890@12345678901234567890123456789012345678901234567890123456789.12345678901234567890123456789012345678901234567890123456789.12345678901234567890123456789012345678901234567890123456789.12345.iana.org",
    ),
    true,
  );
  assertEquals(
    email.valid(
      "12345678901234567890123456789012345678901234567890123456789012345@iana.org",
    ),
    true,
  );
  assertEquals(email.valid(".first.last@iana.org"), true);
  assertEquals(email.valid("first..last@iana.org"), true);
  assertEquals(email.valid("first\\\\@last@iana.org"), true);
  assertEquals(
    email.valid(
      "x@x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456",
    ),
    true,
  );
  assertEquals(email.valid("first.last@example.123"), true);
  assertEquals(
    email.valid(
      "first.last@x234567890123456789012345678901234567890123456789012345678901234.iana.org",
    ),
    true,
  );
  assertEquals(email.valid("user+mailbox@iana.org"), true);
  assertEquals(email.valid("customer/department=shipping@iana.org"), true);
  assertEquals(email.valid("$A12345@iana.org"), true);
  assertEquals(email.valid("!def!xyz%abc@iana.org"), true);
  assertEquals(email.valid("_somename@iana.org"), true);
  assertEquals(email.valid("dclo@us.ibm.com"), true);
  assertEquals(email.valid("abc\\@def@iana.org"), true);
  assertEquals(email.valid("peter.piper@iana.org"), true);
  assertEquals(email.valid('Doug\\ \\"Ace\\"\\ Lovell@iana.org'), true);
  assertEquals(email.valid("abc@def@iana.org"), true);
  assertEquals(email.valid("abc\\\\@def@iana.org"), true);
  assertEquals(email.valid("qu@iana.org"), true);
  assertEquals(email.valid(".dot@iana.org"), true);
  assertEquals(email.valid("two..dot@iana.org"), true);
  assertEquals(email.valid("hello world@iana.org"), true);
  assertEquals(email.valid("gatsby@f.sc.ot.t.f.i.tzg.era.l.d."), true);
  assertEquals(email.valid("test@iana.org"), true);
  assertEquals(email.valid("1234567890@iana.org"), true);
  assertEquals(email.valid("test+test@iana.org"), true);
  assertEquals(email.valid("test-test@iana.org"), true);
  assertEquals(email.valid("t*est@iana.org"), true);
  assertEquals(email.valid("+1~1+@iana.org"), true);
  assertEquals(email.valid("{_test_}@iana.org"), true);
  assertEquals(email.valid("test.test@iana.org"), true);
  assertEquals(email.valid("test@123.123.123.x123"), true);
  assertEquals(email.valid("test@123.123.123.123"), true);
  assertEquals(email.valid("test@example.iana.org"), true);
  assertEquals(email.valid("test@example.example.iana.org"), true);
  assertEquals(email.valid("test..test@iana.org"), true);
  assertEquals(email.valid(".test@iana.org"), true);
  assertEquals(email.valid("test@test@iana.org"), true);
  assertEquals(email.valid("-- test --@iana.org"), true);
  assertEquals(
    email.valid(
      "test@123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012.com",
    ),
    true,
  );
  assertEquals(email.valid("test@123.123.123.123]"), true);
  assertEquals(email.valid("customer/department@iana.org"), true);
  assertEquals(email.valid("_Yosemite.Sam@iana.org"), true);
  assertEquals(email.valid("~@iana.org"), true);
  assertEquals(email.valid(".wooly@iana.org"), true);
  assertEquals(email.valid("wo..oly@iana.org"), true);
  assertEquals(email.valid("Ima.Fool@iana.org"), true);
  assertEquals(email.valid("Ima Fool@iana.org"), true);
  assertEquals(email.valid("phil.h\\@\\@ck@haacked.com"), true);
  assertEquals(
    email.valid("Test.&#13;&#10;Folding.&#13;&#10;Whitespace@iana.org"),
    true,
  );
  assertEquals(email.valid('first."".last@iana.org'), true);
  assertEquals(email.valid("first\\last@iana.org"), true);
  assertEquals(email.valid("Abc\\@def@iana.org"), true);
  assertEquals(email.valid("Fred\\ Bloggs@iana.org"), true);
  assertEquals(email.valid("Joe.\\\\Blow@iana.org"), true);
  assertEquals(email.valid("{^c\\@**Dog^}@cartoon.com"), true);
  assertEquals(email.valid("first().last@iana.org"), true);
  assertEquals(
    email.valid("first.(&#13;&#10;middle &#13;&#10;)last@iana.org"),
    true,
  );
  assertEquals(email.valid("first(middle)last@iana.org"), true);
  assertEquals(email.valid("first(abc.def).last@iana.org"), true);
  assertEquals(email.valid('first(a"bc.def).last@iana.org'), true);
  assertEquals(email.valid("name.lastname@domain.com"), true);
  assertEquals(email.valid("a@bar.com"), true);
  assertEquals(email.valid("a@bar.com."), true);
  assertEquals(email.valid("a-b@bar.com"), true);
  assertEquals(email.valid("+@b.c"), true);
  assertEquals(email.valid("+@b.com"), true);
  assertEquals(email.valid("a@b.co-foo.uk"), true);
  assertEquals(email.valid("valid@about.museum"), true);
  assertEquals(email.valid("invalid@about.museum-"), true);
  assertEquals(email.valid("shaitan@my-domain.thisisminekthx"), true);
  assertEquals(email.valid("foobar@192.168.0.1"), true);
  assertEquals(
    email.valid("Invalid \\&#10;Folding \\&#10;Whitespace@iana.org"),
    true,
  );
  assertEquals(email.valid("user%uucp!path@berkeley.edu"), true);
  assertEquals(email.valid("test. &#13;&#10;&#13;&#10;obs@syntax.com"), true);
  assertEquals(email.valid("test.&#13;&#10;&#13;&#10;obs@syntax.com"), true);
  assertEquals(email.valid("cdburgess+!#$%&'*-/=?+_{}|~test@gmail.com"), true);
  assertEquals(email.valid("test@test.com"), true);
  assertEquals(email.valid("test@example.com&#10;"), true);
  assertEquals(email.valid("test@xn--example.com"), true);
});

Deno.test("should fail on invalid email addresses", () => {
  assertEquals(email.valid('first"last"@iana.org'), false);
  assertEquals(email.valid('first@last"@iana.org'), false);
  assertEquals(email.valid('first\\\\last"@iana.org'), false);
  assertEquals(email.valid("first.last@[12.34.56.78]"), false);
  assertEquals(email.valid("first.last@[IPv6:::12.34.56.78]"), false);
  assertEquals(
    email.valid("first.last@[IPv6:1111:2222:3333::4444:12.34.56.78]"),
    false,
  );
  assertEquals(
    email.valid("first.last@[IPv6:1111:2222:3333:4444:5555:6666:12.34.56.78]"),
    false,
  );
  assertEquals(
    email.valid("first.last@[IPv6:::1111:2222:3333:4444:5555:6666]"),
    false,
  );
  assertEquals(
    email.valid("first.last@[IPv6:1111:2222:3333::4444:5555:6666]"),
    false,
  );
  assertEquals(
    email.valid("first.last@[IPv6:1111:2222:3333:4444:5555:6666::]"),
    false,
  );
  assertEquals(
    email.valid("first.last@[IPv6:1111:2222:3333:4444:5555:6666:7777:8888]"),
    false,
  );
  assertEquals(email.valid("first.last"), false);
  assertEquals(email.valid("first.last.@iana.org"), false);
  assertEquals(email.valid('first"last"@iana.org'), false);
  assertEquals(email.valid('first\\last"@iana.org'), false);
  assertEquals(email.valid('"""@iana.org'), false);
  assertEquals(email.valid('"\\"@iana.org'), false);
  assertEquals(email.valid('""@iana.org'), false);
  assertEquals(email.valid("first.last@"), false);
  assertEquals(email.valid("first.last@[.12.34.56.78]"), false);
  assertEquals(email.valid("first.last@[12.34.56.789]"), false);
  assertEquals(email.valid("first.last@[::12.34.56.78]"), false);
  assertEquals(email.valid("first.last@[IPv5:::12.34.56.78]"), false);
  assertEquals(
    email.valid("first.last@[IPv6:1111:2222:3333::4444:5555:12.34.56.78]"),
    false,
  );
  assertEquals(
    email.valid("first.last@[IPv6:1111:2222:3333:4444:5555:12.34.56.78]"),
    false,
  );
  assertEquals(
    email.valid(
      "first.last@[IPv6:1111:2222:3333:4444:5555:6666:7777:12.34.56.78]",
    ),
    false,
  );
  assertEquals(
    email.valid("first.last@[IPv6:1111:2222:3333:4444:5555:6666:7777]"),
    false,
  );
  assertEquals(
    email.valid(
      "first.last@[IPv6:1111:2222:3333:4444:5555:6666:7777:8888:9999]",
    ),
    false,
  );
  assertEquals(
    email.valid("first.last@[IPv6:1111:2222::3333::4444:5555:6666]"),
    false,
  );
  assertEquals(
    email.valid("first.last@[IPv6:1111:2222:3333::4444:5555:6666:7777]"),
    false,
  );
  assertEquals(
    email.valid("first.last@[IPv6:1111:2222:333x::4444:5555]"),
    false,
  );
  assertEquals(
    email.valid("first.last@[IPv6:1111:2222:33333::4444:5555]"),
    false,
  );
  assertEquals(email.valid("first.last@com"), false);
  assertEquals(email.valid("first.last@-xample.com"), false);
  assertEquals(email.valid("first.last@exampl-.com"), false);
  assertEquals(email.valid('Abc\\@def"@iana.org'), false);
  assertEquals(email.valid('Fred\\ Bloggs"@iana.org'), false);
  assertEquals(email.valid('Joe.\\\\Blow"@iana.org'), false);
  assertEquals(email.valid('Abc@def"@iana.org'), false);
  assertEquals(email.valid('Fred Bloggs"@iana.org'), false);
  assertEquals(email.valid("abc\\\\@iana.org"), false);
  assertEquals(email.valid('Doug \\"Ace\\" L."@iana.org'), false);
  assertEquals(email.valid("abc\\@iana.org"), false);
  assertEquals(email.valid("@iana.org"), false);
  assertEquals(email.valid("doug@"), false);
  assertEquals(email.valid('ote"@iana.org'), false);
  assertEquals(email.valid("dot.@iana.org"), false);
  assertEquals(email.valid('Doug "Ace" L."@iana.org'), false);
  assertEquals(email.valid('Doug\\ \\"Ace\\"\\ L\\.@iana.org'), false);
  assertEquals(email.valid("TEST@iana.org"), false);
  assertEquals(email.valid('[[test]]"@iana.org'), false);
  assertEquals(email.valid('test.test"@iana.org'), false);
  assertEquals(email.valid('test."test"@iana.org'), false);
  assertEquals(email.valid('test@test"@iana.org'), false);
  assertEquals(email.valid("test@[123.123.123.123]"), false);
  assertEquals(email.valid("test.iana.org"), false);
  assertEquals(email.valid("test.@iana.org"), false);
  assertEquals(email.valid("test@@iana.org"), false);
  assertEquals(email.valid("[test]@iana.org"), false);
  assertEquals(email.valid('test\\test"@iana.org'), false);
  assertEquals(email.valid('test"test"@iana.org'), false);
  assertEquals(email.valid("()[]\\;:,><@iana.org"), false);
  assertEquals(email.valid("test@."), false);
  assertEquals(email.valid("test@example."), false);
  assertEquals(email.valid("test@.org"), false);
  assertEquals(email.valid("test@example"), false);
  assertEquals(email.valid("test@[123.123.123.123"), false);
  assertEquals(email.valid("NotAnEmail"), false);
  assertEquals(email.valid("@NotAnEmail"), false);
  assertEquals(email.valid('test\\\\blah"@iana.org'), false);
  assertEquals(email.valid('test\\blah"@iana.org'), false);
  assertEquals(email.valid('test\\&#13;blah"@iana.org'), false);
  assertEquals(email.valid('test &#13;blah"@iana.org'), false);
  assertEquals(email.valid('test\\"blah"@iana.org'), false);
  assertEquals(email.valid('test"blah"@iana.org'), false);
  assertEquals(email.valid("pootietang.@iana.org"), false);
  assertEquals(email.valid(".@iana.org"), false);
  assertEquals(email.valid('Austin@Powers"@iana.org'), false);
  assertEquals(email.valid('Ima.Fool"@iana.org'), false);
  assertEquals(email.valid('Ima Fool"@iana.org'), false);
  assertEquals(email.valid('first"."last"@iana.org'), false);
  assertEquals(email.valid('first".middle."last"@iana.org'), false);
  assertEquals(email.valid('first\\\\"last"@iana.org'), false);
  assertEquals(email.valid('first".las\t@iana.org'), false);
  assertEquals(email.valid('first."last"@iana.org'), false);
  assertEquals(email.valid('first"."middle"."last"@iana.org'), false);
  assertEquals(email.valid('first.middle"."last"@iana.org'), false);
  assertEquals(email.valid('first.middle.last"@iana.org'), false);
  assertEquals(email.valid('first..last"@iana.org'), false);
  assertEquals(email.valid("foo@[\\1.2.3.4]"), false);
  assertEquals(email.valid('first\\\\\\"last"@iana.org'), false);
  assertEquals(email.valid('first."mid\\dle"."last"@iana.org'), false);
  assertEquals(
    email.valid("first.last@[IPv6:1111:2222:3333:4444:5555:6666:12.34.567.89]"),
    false,
  );
  assertEquals(email.valid('test\\&#13;&#10;blah"@iana.org'), false);
  assertEquals(email.valid('test &#13;&#10;blah"@iana.org'), false);
  assertEquals(email.valid("(foo)cal(bar)@(baz)iamcal.com(quux)"), false);
  assertEquals(email.valid("cal@iamcal(woo).(yay)com"), false);
  assertEquals(email.valid('foo"(yay)@(hoopla)[1.2.3.4]'), false);
  assertEquals(email.valid("cal(woo(yay)hoopla)@iamcal.com"), false);
  assertEquals(email.valid("cal(foo\\@bar)@iamcal.com"), false);
  assertEquals(email.valid("cal(foo\\)bar)@iamcal.com"), false);
  assertEquals(email.valid("cal(foo(bar)@iamcal.com"), false);
  assertEquals(email.valid("cal(foo)bar)@iamcal.com"), false);
  assertEquals(email.valid("cal(foo\\)@iamcal.com"), false);
  assertEquals(
    email.valid(
      "first(12345678901234567890123456789012345678901234567890)last@(1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890)iana.org",
    ),
    false,
  );
  assertEquals(
    email.valid(
      'first(Welcome to&#13;&#10; the("wonderful"(!)) world &#13;&#10; of email)@iana.org',
    ),
    false,
  );
  assertEquals(email.valid("pete(his account)@silly.test(his host)"), false);
  assertEquals(email.valid("c@(Chris's host.)public.example"), false);
  assertEquals(email.valid("jdoe@machine(comment).  example"), false);
  assertEquals(email.valid("1234   @   local(blah)  .machine .example"), false);
  assertEquals(email.valid('first.(")middle.last(")@iana.org'), false);
  assertEquals(
    email.valid(
      'first(abc("def".ghi).mno)middle(abc("def".ghi).mno).last@(abc("def".ghi).mno)example(abc("def".ghi).mno).(abc("def".ghi).mno)com(abc("def".ghi).mno)',
    ),
    false,
  );
  assertEquals(email.valid("first(abc\\(def)@iana.org"), false);
  assertEquals(
    email.valid(
      "first.last@x(1234567890123456789012345678901234567890123456789012345678901234567890).com",
    ),
    false,
  );
  assertEquals(email.valid("a(a(b(c)d(e(f))g)h(i)j)@iana.org"), false);
  assertEquals(email.valid("a(a(b(c)d(e(f))g)(h(i)j)@iana.org"), false);
  assertEquals(email.valid(".@"), false);
  assertEquals(email.valid("a@b"), false);
  assertEquals(email.valid("@bar.com"), false);
  assertEquals(email.valid("@@bar.com"), false);
  assertEquals(email.valid("aaa.com"), false);
  assertEquals(email.valid("aaa@.com"), false);
  assertEquals(email.valid("aaa@.123"), false);
  assertEquals(email.valid("aaa@[123.123.123.123]"), false);
  assertEquals(email.valid("aaa@[123.123.123.123]a"), false);
  assertEquals(email.valid("aaa@[123.123.123.333]"), false);
  assertEquals(email.valid("a@bar"), false);
  assertEquals(email.valid("a@-b.com"), false);
  assertEquals(email.valid("a@b-.com"), false);
  assertEquals(email.valid("-@..com"), false);
  assertEquals(email.valid("-@a..com"), false);
  assertEquals(email.valid('hello my name is"@s\tutter.com'), false);
  assertEquals(email.valid('Test \\"Fail\\" Ing"@iana.org'), false);
  assertEquals(email.valid("test@...........com"), false);
  assertEquals(email.valid('Joe\\\\Blow"@iana.org'), false);
  assertEquals(
    email.valid("HM2Kinsists@(that comments are allowed)this.is.ok"),
    false,
  );
  assertEquals(email.valid('first(last)"@iana.org'), false);
  assertEquals(email.valid("first.last @iana.org"), false);
  assertEquals(email.valid('Unicode NULL \\␀"@char.com'), false);
  assertEquals(email.valid('Unicode NULL ␀"@char.com'), false);
  assertEquals(email.valid("Unicode NULL \\␀@char.com"), false);
  assertEquals(email.valid("first.last@[IPv6:::a2:a3:a4:b1:b2:b3:b4]"), false);
  assertEquals(email.valid("first.last@[IPv6:a1:a2:a3:a4:b1:b2:b3::]"), false);
  assertEquals(email.valid("first.last@[IPv6::]"), false);
  assertEquals(email.valid("first.last@[IPv6:::]"), false);
  assertEquals(email.valid("first.last@[IPv6::::]"), false);
  assertEquals(email.valid("first.last@[IPv6::b4]"), false);
  assertEquals(email.valid("first.last@[IPv6:::b4]"), false);
  assertEquals(email.valid("first.last@[IPv6::::b4]"), false);
  assertEquals(email.valid("first.last@[IPv6::b3:b4]"), false);
  assertEquals(email.valid("first.last@[IPv6:::b3:b4]"), false);
  assertEquals(email.valid("first.last@[IPv6::::b3:b4]"), false);
  assertEquals(email.valid("first.last@[IPv6:a1::b4]"), false);
  assertEquals(email.valid("first.last@[IPv6:a1:::b4]"), false);
  assertEquals(email.valid("first.last@[IPv6:a1:]"), false);
  assertEquals(email.valid("first.last@[IPv6:a1::]"), false);
  assertEquals(email.valid("first.last@[IPv6:a1:::]"), false);
  assertEquals(email.valid("first.last@[IPv6:a1:a2:]"), false);
  assertEquals(email.valid("first.last@[IPv6:a1:a2::]"), false);
  assertEquals(email.valid("first.last@[IPv6:a1:a2:::]"), false);
  assertEquals(email.valid("first.last@[IPv6:0123:4567:89ab:cdef::]"), false);
  assertEquals(email.valid("first.last@[IPv6:0123:4567:89ab:CDEF::]"), false);
  assertEquals(
    email.valid("first.last@[IPv6:::a3:a4:b1:ffff:11.22.33.44]"),
    false,
  );
  assertEquals(
    email.valid("first.last@[IPv6:::a2:a3:a4:b1:ffff:11.22.33.44]"),
    false,
  );
  assertEquals(
    email.valid("first.last@[IPv6:a1:a2:a3:a4::11.22.33.44]"),
    false,
  );
  assertEquals(
    email.valid("first.last@[IPv6:a1:a2:a3:a4:b1::11.22.33.44]"),
    false,
  );
  assertEquals(email.valid("first.last@[IPv6::11.22.33.44]"), false);
  assertEquals(email.valid("first.last@[IPv6::::11.22.33.44]"), false);
  assertEquals(email.valid("first.last@[IPv6:a1:11.22.33.44]"), false);
  assertEquals(email.valid("first.last@[IPv6:a1::11.22.33.44]"), false);
  assertEquals(email.valid("first.last@[IPv6:a1:::11.22.33.44]"), false);
  assertEquals(email.valid("first.last@[IPv6:a1:a2::11.22.33.44]"), false);
  assertEquals(email.valid("first.last@[IPv6:a1:a2:::11.22.33.44]"), false);
  assertEquals(
    email.valid("first.last@[IPv6:0123:4567:89ab:cdef::11.22.33.44]"),
    false,
  );
  assertEquals(
    email.valid("first.last@[IPv6:0123:4567:89ab:cdef::11.22.33.xx]"),
    false,
  );
  assertEquals(
    email.valid("first.last@[IPv6:0123:4567:89ab:CDEF::11.22.33.44]"),
    false,
  );
  assertEquals(
    email.valid("first.last@[IPv6:0123:4567:89ab:CDEFF::11.22.33.44]"),
    false,
  );
  assertEquals(
    email.valid("first.last@[IPv6:a1::a4:b1::b4:11.22.33.44]"),
    false,
  );
  assertEquals(email.valid("first.last@[IPv6:a1::11.22.33]"), false);
  assertEquals(email.valid("first.last@[IPv6:a1::11.22.33.44.55]"), false);
  assertEquals(email.valid("first.last@[IPv6:a1::b211.22.33.44]"), false);
  assertEquals(email.valid("first.last@[IPv6:a1::b2:11.22.33.44]"), false);
  assertEquals(email.valid("first.last@[IPv6:a1::b2::11.22.33.44]"), false);
  assertEquals(email.valid("first.last@[IPv6:a1::b3:]"), false);
  assertEquals(email.valid("first.last@[IPv6::a2::b4]"), false);
  assertEquals(email.valid("first.last@[IPv6:a1:a2:a3:a4:b1:b2:b3:]"), false);
  assertEquals(email.valid("first.last@[IPv6::a2:a3:a4:b1:b2:b3:b4]"), false);
  assertEquals(
    email.valid("first.last@[IPv6:a1:a2:a3:a4::b1:b2:b3:b4]"),
    false,
  );
  assertEquals(email.valid("test@Bücher.ch"), false);
  assertEquals(email.valid("a@a"), false);
});
