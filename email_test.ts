import { asserts } from "./deps.ts";
import { email } from "./mod.ts";

const { assertEquals } = asserts;

Deno.test("[email] valid", () => {
  const valid = [
    "test@example.com",
    "support@subdomain.example.com",
    "first.last@iana.org",
    "1234567890123456789012345678901234567890123456789012345678901234@iana.org",
    "first.last@sub.do,com",
    "first@last@iana.org",
    "x@x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x2",
    "1234567890123456789012345678901234567890123456789012345678@12345678901234567890123456789012345678901234567890123456789.12345678901234567890123456789012345678901234567890123456789.123456789012345678901234567890123456789012345678901234567890123.iana.org",
    "first.last@3com.com",
    "first.last@123.iana.org",
    "first.last@x23456789012345678901234567890123456789012345678901234567890123.iana.org",
    "123456789012345678901234567890123456789012345678901234567890@12345678901234567890123456789012345678901234567890123456789.12345678901234567890123456789012345678901234567890123456789.12345678901234567890123456789012345678901234567890123456789.12345.iana.org",
    "12345678901234567890123456789012345678901234567890123456789012345@iana.org",
    ".first.last@iana.org",
    "first..last@iana.org",
    "first\\\\@last@iana.org",
    "first.last@example.123",
    "user+mailbox@iana.org",
    "customer/department=shipping@iana.org",
    "$A12345@iana.org",
    "!def!xyz%abc@iana.org",
    "_somename@iana.org",
    "dclo@us.ibm.com",
    "abc\\@def@iana.org",
    "peter.piper@iana.org",
    "abc@def@iana.org",
    "abc\\\\@def@iana.org",
    "qu@iana.org",
    ".dot@iana.org",
    "two..dot@iana.org",
    "hello world@iana.org",
    "gatsby@f.sc.ot.t.f.i.tzg.era.l.d.",
    "test@iana.org",
    "1234567890@iana.org",
    "test+test@iana.org",
    "test-test@iana.org",
    "t*est@iana.org",
    "+1~1+@iana.org",
    "{_test_}@iana.org",
    "test.test@iana.org",
    "test@123.123.123.x123",
    "test@123.123.123.123",
    "test@example.iana.org",
    "test@example.example.iana.org",
    "test..test@iana.org",
    ".test@iana.org",
    "test@test@iana.org",
    "-- test --@iana.org",
    "test@123.123.123.123]",
    "customer/department@iana.org",
    "_Yosemite.Sam@iana.org",
    "~@iana.org",
    ".wooly@iana.org",
    "wo..oly@iana.org",
    "Ima.Fool@iana.org",
    "Ima Fool@iana.org",
    "phil.h\\@\\@ck@haacked.com",
    "first\\last@iana.org",
    "Abc\\@def@iana.org",
    "Fred\\ Bloggs@iana.org",
    "Joe.\\\\Blow@iana.org",
    "{^c\\@**Dog^}@cartoon.com",
    "first().last@iana.org",
    "first(middle)last@iana.org",
    "first(abc.def).last@iana.org",
    "name.lastname@domain.com",
    "a@bar.com",
    "a@bar.com.",
    "a-b@bar.com",
    "+@b.c",
    "+@b.com",
    "a@b.co-foo.uk",
    "valid@about.museum",
    "invalid@about.museum-",
    "shaitan@my-domain.thisisminekthx",
    "foobar@192.168.0.1",
    "user%uucp!path@berkeley.edu",
    "test. &#13;&#10;&#13;&#10;obs@syntax.com",
    "test.&#13;&#10;&#13;&#10;obs@syntax.com",
    "cdburgess+!#$%&'*-/=?+_{}|~test@gmail.com",
    "test@test.com",
    "test@example.com&#10;",
    "test@xn--example.com",
    "x@x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456",
    "first.last@x234567890123456789012345678901234567890123456789012345678901234.iana.org",
    "test@123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012.com",
    'Doug\\ \\"Ace\\"\\ Lovell@iana.org',
    "Test.&#13;&#10;Folding.&#13;&#10;Whitespace@iana.org",
    'first."".last@iana.org',
    "first.(&#13;&#10;middle &#13;&#10;)last@iana.org",
    'first(a"bc.def).last@iana.org',
    "Invalid \\&#10;Folding \\&#10;Whitespace@iana.org",
  ];

  for (const v of valid) {
    assertEquals(email.valid(v), true, `${v} is a valid email`);
  }
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
