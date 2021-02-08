import { assertEquals } from './deps.ts'
import { email } from './email.ts'

Deno.test('should pass on valid email addresses', () => {
	assertEquals(email('test@example.com'), true)
	assertEquals(email('support@subdomain.example.com'), true)
	assertEquals(email('first.last@iana.org'), true)
	assertEquals(
		email(
			'1234567890123456789012345678901234567890123456789012345678901234@iana.org'
		),
		true
	)
	assertEquals(email('first.last@sub.do,com'), true)
	assertEquals(email('first@last@iana.org'), true)
	assertEquals(
		email(
			'x@x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x2'
		),
		true
	)
	assertEquals(
		email(
			'1234567890123456789012345678901234567890123456789012345678@12345678901234567890123456789012345678901234567890123456789.12345678901234567890123456789012345678901234567890123456789.123456789012345678901234567890123456789012345678901234567890123.iana.org'
		),
		true
	)
	assertEquals(
		email(
			'first.last@x23456789012345678901234567890123456789012345678901234567890123.iana.org'
		),
		true
	)
	assertEquals(email('first.last@3com.com'), true)
	assertEquals(email('first.last@123.iana.org'), true)
	assertEquals(
		email(
			'123456789012345678901234567890123456789012345678901234567890@12345678901234567890123456789012345678901234567890123456789.12345678901234567890123456789012345678901234567890123456789.12345678901234567890123456789012345678901234567890123456789.12345.iana.org'
		),
		true
	)
	assertEquals(
		email(
			'12345678901234567890123456789012345678901234567890123456789012345@iana.org'
		),
		true
	)
	assertEquals(email('.first.last@iana.org'), true)
	assertEquals(email('first..last@iana.org'), true)
	assertEquals(email('first\\\\@last@iana.org'), true)
	assertEquals(
		email(
			'x@x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456'
		),
		true
	)
	assertEquals(email('first.last@example.123'), true)
	assertEquals(
		email(
			'first.last@x234567890123456789012345678901234567890123456789012345678901234.iana.org'
		),
		true
	)
	assertEquals(email('user+mailbox@iana.org'), true)
	assertEquals(email('customer/department=shipping@iana.org'), true)
	assertEquals(email('$A12345@iana.org'), true)
	assertEquals(email('!def!xyz%abc@iana.org'), true)
	assertEquals(email('_somename@iana.org'), true)
	assertEquals(email('dclo@us.ibm.com'), true)
	assertEquals(email('abc\\@def@iana.org'), true)
	assertEquals(email('peter.piper@iana.org'), true)
	assertEquals(email('Doug\\ \\"Ace\\"\\ Lovell@iana.org'), true)
	assertEquals(email('abc@def@iana.org'), true)
	assertEquals(email('abc\\\\@def@iana.org'), true)
	assertEquals(email('qu@iana.org'), true)
	assertEquals(email('.dot@iana.org'), true)
	assertEquals(email('two..dot@iana.org'), true)
	assertEquals(email('hello world@iana.org'), true)
	assertEquals(email('gatsby@f.sc.ot.t.f.i.tzg.era.l.d.'), true)
	assertEquals(email('test@iana.org'), true)
	assertEquals(email('1234567890@iana.org'), true)
	assertEquals(email('test+test@iana.org'), true)
	assertEquals(email('test-test@iana.org'), true)
	assertEquals(email('t*est@iana.org'), true)
	assertEquals(email('+1~1+@iana.org'), true)
	assertEquals(email('{_test_}@iana.org'), true)
	assertEquals(email('test.test@iana.org'), true)
	assertEquals(email('test@123.123.123.x123'), true)
	assertEquals(email('test@123.123.123.123'), true)
	assertEquals(email('test@example.iana.org'), true)
	assertEquals(email('test@example.example.iana.org'), true)
	assertEquals(email('test..test@iana.org'), true)
	assertEquals(email('.test@iana.org'), true)
	assertEquals(email('test@test@iana.org'), true)
	assertEquals(email('-- test --@iana.org'), true)
	assertEquals(
		email(
			'test@123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012.com'
		),
		true
	)
	assertEquals(email('test@123.123.123.123]'), true)
	assertEquals(email('customer/department@iana.org'), true)
	assertEquals(email('_Yosemite.Sam@iana.org'), true)
	assertEquals(email('~@iana.org'), true)
	assertEquals(email('.wooly@iana.org'), true)
	assertEquals(email('wo..oly@iana.org'), true)
	assertEquals(email('Ima.Fool@iana.org'), true)
	assertEquals(email('Ima Fool@iana.org'), true)
	assertEquals(email('phil.h\\@\\@ck@haacked.com'), true)
	assertEquals(
		email('Test.&#13;&#10;Folding.&#13;&#10;Whitespace@iana.org'),
		true
	)
	assertEquals(email('first."".last@iana.org'), true)
	assertEquals(email('first\\last@iana.org'), true)
	assertEquals(email('Abc\\@def@iana.org'), true)
	assertEquals(email('Fred\\ Bloggs@iana.org'), true)
	assertEquals(email('Joe.\\\\Blow@iana.org'), true)
	assertEquals(email('{^c\\@**Dog^}@cartoon.com'), true)
	assertEquals(email('first().last@iana.org'), true)
	assertEquals(email('first.(&#13;&#10;middle &#13;&#10;)last@iana.org'), true)
	assertEquals(email('first(middle)last@iana.org'), true)
	assertEquals(email('first(abc.def).last@iana.org'), true)
	assertEquals(email('first(a"bc.def).last@iana.org'), true)
	assertEquals(email('name.lastname@domain.com'), true)
	assertEquals(email('a@bar.com'), true)
	assertEquals(email('a@bar.com.'), true)
	assertEquals(email('a-b@bar.com'), true)
	assertEquals(email('+@b.c'), true)
	assertEquals(email('+@b.com'), true)
	assertEquals(email('a@b.co-foo.uk'), true)
	assertEquals(email('valid@about.museum'), true)
	assertEquals(email('invalid@about.museum-'), true)
	assertEquals(email('shaitan@my-domain.thisisminekthx'), true)
	assertEquals(email('foobar@192.168.0.1'), true)
	assertEquals(email('Invalid \\&#10;Folding \\&#10;Whitespace@iana.org'), true)
	assertEquals(email('user%uucp!path@berkeley.edu'), true)
	assertEquals(email('test. &#13;&#10;&#13;&#10;obs@syntax.com'), true)
	assertEquals(email('test.&#13;&#10;&#13;&#10;obs@syntax.com'), true)
	assertEquals(email("cdburgess+!#$%&'*-/=?+_{}|~test@gmail.com"), true)
	assertEquals(email('test@test.com'), true)
	assertEquals(email('test@example.com&#10;'), true)
	assertEquals(email('test@xn--example.com'), true)
})

Deno.test('should fail on invalid email addresses', () => {
	assertEquals(email('first"last"@iana.org'), false)
	assertEquals(email('first@last"@iana.org'), false)
	assertEquals(email('first\\\\last"@iana.org'), false)
	assertEquals(email('first.last@[12.34.56.78]'), false)
	assertEquals(email('first.last@[IPv6:::12.34.56.78]'), false)
	assertEquals(
		email('first.last@[IPv6:1111:2222:3333::4444:12.34.56.78]'),
		false
	)
	assertEquals(
		email('first.last@[IPv6:1111:2222:3333:4444:5555:6666:12.34.56.78]'),
		false
	)
	assertEquals(
		email('first.last@[IPv6:::1111:2222:3333:4444:5555:6666]'),
		false
	)
	assertEquals(email('first.last@[IPv6:1111:2222:3333::4444:5555:6666]'), false)
	assertEquals(
		email('first.last@[IPv6:1111:2222:3333:4444:5555:6666::]'),
		false
	)
	assertEquals(
		email('first.last@[IPv6:1111:2222:3333:4444:5555:6666:7777:8888]'),
		false
	)
	assertEquals(email('first.last'), false)
	assertEquals(email('first.last.@iana.org'), false)
	assertEquals(email('first"last"@iana.org'), false)
	assertEquals(email('first\\last"@iana.org'), false)
	assertEquals(email('"""@iana.org'), false)
	assertEquals(email('"\\"@iana.org'), false)
	assertEquals(email('""@iana.org'), false)
	assertEquals(email('first.last@'), false)
	assertEquals(email('first.last@[.12.34.56.78]'), false)
	assertEquals(email('first.last@[12.34.56.789]'), false)
	assertEquals(email('first.last@[::12.34.56.78]'), false)
	assertEquals(email('first.last@[IPv5:::12.34.56.78]'), false)
	assertEquals(
		email('first.last@[IPv6:1111:2222:3333::4444:5555:12.34.56.78]'),
		false
	)
	assertEquals(
		email('first.last@[IPv6:1111:2222:3333:4444:5555:12.34.56.78]'),
		false
	)
	assertEquals(
		email('first.last@[IPv6:1111:2222:3333:4444:5555:6666:7777:12.34.56.78]'),
		false
	)
	assertEquals(
		email('first.last@[IPv6:1111:2222:3333:4444:5555:6666:7777]'),
		false
	)
	assertEquals(
		email('first.last@[IPv6:1111:2222:3333:4444:5555:6666:7777:8888:9999]'),
		false
	)
	assertEquals(
		email('first.last@[IPv6:1111:2222::3333::4444:5555:6666]'),
		false
	)
	assertEquals(
		email('first.last@[IPv6:1111:2222:3333::4444:5555:6666:7777]'),
		false
	)
	assertEquals(email('first.last@[IPv6:1111:2222:333x::4444:5555]'), false)
	assertEquals(email('first.last@[IPv6:1111:2222:33333::4444:5555]'), false)
	assertEquals(email('first.last@com'), false)
	assertEquals(email('first.last@-xample.com'), false)
	assertEquals(email('first.last@exampl-.com'), false)
	assertEquals(email('Abc\\@def"@iana.org'), false)
	assertEquals(email('Fred\\ Bloggs"@iana.org'), false)
	assertEquals(email('Joe.\\\\Blow"@iana.org'), false)
	assertEquals(email('Abc@def"@iana.org'), false)
	assertEquals(email('Fred Bloggs"@iana.org'), false)
	assertEquals(email('abc\\\\@iana.org'), false)
	assertEquals(email('Doug \\"Ace\\" L."@iana.org'), false)
	assertEquals(email('abc\\@iana.org'), false)
	assertEquals(email('@iana.org'), false)
	assertEquals(email('doug@'), false)
	assertEquals(email('ote"@iana.org'), false)
	assertEquals(email('dot.@iana.org'), false)
	assertEquals(email('Doug "Ace" L."@iana.org'), false)
	assertEquals(email('Doug\\ \\"Ace\\"\\ L\\.@iana.org'), false)
	assertEquals(email('TEST@iana.org'), false)
	assertEquals(email('[[test]]"@iana.org'), false)
	assertEquals(email('test.test"@iana.org'), false)
	assertEquals(email('test."test"@iana.org'), false)
	assertEquals(email('test@test"@iana.org'), false)
	assertEquals(email('test@[123.123.123.123]'), false)
	assertEquals(email('test.iana.org'), false)
	assertEquals(email('test.@iana.org'), false)
	assertEquals(email('test@@iana.org'), false)
	assertEquals(email('[test]@iana.org'), false)
	assertEquals(email('test\\test"@iana.org'), false)
	assertEquals(email('test"test"@iana.org'), false)
	assertEquals(email('()[]\\;:,><@iana.org'), false)
	assertEquals(email('test@.'), false)
	assertEquals(email('test@example.'), false)
	assertEquals(email('test@.org'), false)
	assertEquals(email('test@example'), false)
	assertEquals(email('test@[123.123.123.123'), false)
	assertEquals(email('NotAnEmail'), false)
	assertEquals(email('@NotAnEmail'), false)
	assertEquals(email('test\\\\blah"@iana.org'), false)
	assertEquals(email('test\\blah"@iana.org'), false)
	assertEquals(email('test\\&#13;blah"@iana.org'), false)
	assertEquals(email('test &#13;blah"@iana.org'), false)
	assertEquals(email('test\\"blah"@iana.org'), false)
	assertEquals(email('test"blah"@iana.org'), false)
	assertEquals(email('pootietang.@iana.org'), false)
	assertEquals(email('.@iana.org'), false)
	assertEquals(email('Austin@Powers"@iana.org'), false)
	assertEquals(email('Ima.Fool"@iana.org'), false)
	assertEquals(email('Ima Fool"@iana.org'), false)
	assertEquals(email('first"."last"@iana.org'), false)
	assertEquals(email('first".middle."last"@iana.org'), false)
	assertEquals(email('first\\\\"last"@iana.org'), false)
	assertEquals(email('first".las\t@iana.org'), false)
	assertEquals(email('first."last"@iana.org'), false)
	assertEquals(email('first"."middle"."last"@iana.org'), false)
	assertEquals(email('first.middle"."last"@iana.org'), false)
	assertEquals(email('first.middle.last"@iana.org'), false)
	assertEquals(email('first..last"@iana.org'), false)
	assertEquals(email('foo@[\\1.2.3.4]'), false)
	assertEquals(email('first\\\\\\"last"@iana.org'), false)
	assertEquals(email('first."mid\\dle"."last"@iana.org'), false)
	assertEquals(
		email('first.last@[IPv6:1111:2222:3333:4444:5555:6666:12.34.567.89]'),
		false
	)
	assertEquals(email('test\\&#13;&#10;blah"@iana.org'), false)
	assertEquals(email('test &#13;&#10;blah"@iana.org'), false)
	assertEquals(email('(foo)cal(bar)@(baz)iamcal.com(quux)'), false)
	assertEquals(email('cal@iamcal(woo).(yay)com'), false)
	assertEquals(email('foo"(yay)@(hoopla)[1.2.3.4]'), false)
	assertEquals(email('cal(woo(yay)hoopla)@iamcal.com'), false)
	assertEquals(email('cal(foo\\@bar)@iamcal.com'), false)
	assertEquals(email('cal(foo\\)bar)@iamcal.com'), false)
	assertEquals(email('cal(foo(bar)@iamcal.com'), false)
	assertEquals(email('cal(foo)bar)@iamcal.com'), false)
	assertEquals(email('cal(foo\\)@iamcal.com'), false)
	assertEquals(
		email(
			'first(12345678901234567890123456789012345678901234567890)last@(1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890)iana.org'
		),
		false
	)
	assertEquals(
		email(
			'first(Welcome to&#13;&#10; the("wonderful"(!)) world &#13;&#10; of email)@iana.org'
		),
		false
	)
	assertEquals(email('pete(his account)@silly.test(his host)'), false)
	assertEquals(email("c@(Chris's host.)public.example"), false)
	assertEquals(email('jdoe@machine(comment).  example'), false)
	assertEquals(email('1234   @   local(blah)  .machine .example'), false)
	assertEquals(email('first.(")middle.last(")@iana.org'), false)
	assertEquals(
		email(
			'first(abc("def".ghi).mno)middle(abc("def".ghi).mno).last@(abc("def".ghi).mno)example(abc("def".ghi).mno).(abc("def".ghi).mno)com(abc("def".ghi).mno)'
		),
		false
	)
	assertEquals(email('first(abc\\(def)@iana.org'), false)
	assertEquals(
		email(
			'first.last@x(1234567890123456789012345678901234567890123456789012345678901234567890).com'
		),
		false
	)
	assertEquals(email('a(a(b(c)d(e(f))g)h(i)j)@iana.org'), false)
	assertEquals(email('a(a(b(c)d(e(f))g)(h(i)j)@iana.org'), false)
	assertEquals(email('.@'), false)
	assertEquals(email('a@b'), false)
	assertEquals(email('@bar.com'), false)
	assertEquals(email('@@bar.com'), false)
	assertEquals(email('aaa.com'), false)
	assertEquals(email('aaa@.com'), false)
	assertEquals(email('aaa@.123'), false)
	assertEquals(email('aaa@[123.123.123.123]'), false)
	assertEquals(email('aaa@[123.123.123.123]a'), false)
	assertEquals(email('aaa@[123.123.123.333]'), false)
	assertEquals(email('a@bar'), false)
	assertEquals(email('a@-b.com'), false)
	assertEquals(email('a@b-.com'), false)
	assertEquals(email('-@..com'), false)
	assertEquals(email('-@a..com'), false)
	assertEquals(email('hello my name is"@s\tutter.com'), false)
	assertEquals(email('Test \\"Fail\\" Ing"@iana.org'), false)
	assertEquals(email('test@...........com'), false)
	assertEquals(email('Joe\\\\Blow"@iana.org'), false)
	assertEquals(
		email('HM2Kinsists@(that comments are allowed)this.is.ok'),
		false
	)
	assertEquals(email('first(last)"@iana.org'), false)
	assertEquals(email('first.last @iana.org'), false)
	assertEquals(email('Unicode NULL \\␀"@char.com'), false)
	assertEquals(email('Unicode NULL ␀"@char.com'), false)
	assertEquals(email('Unicode NULL \\␀@char.com'), false)
	assertEquals(email('first.last@[IPv6:::a2:a3:a4:b1:b2:b3:b4]'), false)
	assertEquals(email('first.last@[IPv6:a1:a2:a3:a4:b1:b2:b3::]'), false)
	assertEquals(email('first.last@[IPv6::]'), false)
	assertEquals(email('first.last@[IPv6:::]'), false)
	assertEquals(email('first.last@[IPv6::::]'), false)
	assertEquals(email('first.last@[IPv6::b4]'), false)
	assertEquals(email('first.last@[IPv6:::b4]'), false)
	assertEquals(email('first.last@[IPv6::::b4]'), false)
	assertEquals(email('first.last@[IPv6::b3:b4]'), false)
	assertEquals(email('first.last@[IPv6:::b3:b4]'), false)
	assertEquals(email('first.last@[IPv6::::b3:b4]'), false)
	assertEquals(email('first.last@[IPv6:a1::b4]'), false)
	assertEquals(email('first.last@[IPv6:a1:::b4]'), false)
	assertEquals(email('first.last@[IPv6:a1:]'), false)
	assertEquals(email('first.last@[IPv6:a1::]'), false)
	assertEquals(email('first.last@[IPv6:a1:::]'), false)
	assertEquals(email('first.last@[IPv6:a1:a2:]'), false)
	assertEquals(email('first.last@[IPv6:a1:a2::]'), false)
	assertEquals(email('first.last@[IPv6:a1:a2:::]'), false)
	assertEquals(email('first.last@[IPv6:0123:4567:89ab:cdef::]'), false)
	assertEquals(email('first.last@[IPv6:0123:4567:89ab:CDEF::]'), false)
	assertEquals(email('first.last@[IPv6:::a3:a4:b1:ffff:11.22.33.44]'), false)
	assertEquals(email('first.last@[IPv6:::a2:a3:a4:b1:ffff:11.22.33.44]'), false)
	assertEquals(email('first.last@[IPv6:a1:a2:a3:a4::11.22.33.44]'), false)
	assertEquals(email('first.last@[IPv6:a1:a2:a3:a4:b1::11.22.33.44]'), false)
	assertEquals(email('first.last@[IPv6::11.22.33.44]'), false)
	assertEquals(email('first.last@[IPv6::::11.22.33.44]'), false)
	assertEquals(email('first.last@[IPv6:a1:11.22.33.44]'), false)
	assertEquals(email('first.last@[IPv6:a1::11.22.33.44]'), false)
	assertEquals(email('first.last@[IPv6:a1:::11.22.33.44]'), false)
	assertEquals(email('first.last@[IPv6:a1:a2::11.22.33.44]'), false)
	assertEquals(email('first.last@[IPv6:a1:a2:::11.22.33.44]'), false)
	assertEquals(
		email('first.last@[IPv6:0123:4567:89ab:cdef::11.22.33.44]'),
		false
	)
	assertEquals(
		email('first.last@[IPv6:0123:4567:89ab:cdef::11.22.33.xx]'),
		false
	)
	assertEquals(
		email('first.last@[IPv6:0123:4567:89ab:CDEF::11.22.33.44]'),
		false
	)
	assertEquals(
		email('first.last@[IPv6:0123:4567:89ab:CDEFF::11.22.33.44]'),
		false
	)
	assertEquals(email('first.last@[IPv6:a1::a4:b1::b4:11.22.33.44]'), false)
	assertEquals(email('first.last@[IPv6:a1::11.22.33]'), false)
	assertEquals(email('first.last@[IPv6:a1::11.22.33.44.55]'), false)
	assertEquals(email('first.last@[IPv6:a1::b211.22.33.44]'), false)
	assertEquals(email('first.last@[IPv6:a1::b2:11.22.33.44]'), false)
	assertEquals(email('first.last@[IPv6:a1::b2::11.22.33.44]'), false)
	assertEquals(email('first.last@[IPv6:a1::b3:]'), false)
	assertEquals(email('first.last@[IPv6::a2::b4]'), false)
	assertEquals(email('first.last@[IPv6:a1:a2:a3:a4:b1:b2:b3:]'), false)
	assertEquals(email('first.last@[IPv6::a2:a3:a4:b1:b2:b3:b4]'), false)
	assertEquals(email('first.last@[IPv6:a1:a2:a3:a4::b1:b2:b3:b4]'), false)
	assertEquals(email('test@Bücher.ch'), false)
	assertEquals(email('a@a'), false)
})
