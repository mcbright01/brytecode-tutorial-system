import { DashboardLayout } from "@/components/DashboardLayout";
import { 
  DollarSign,
  CheckCircle2,
  XCircle,
  Clock,
  Eye,
  Download,
  Search,
  Filter,
  AlertCircle,
  FileText,
  Calendar,
  User,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const payments = [
  { 
    id: 1, 
    student: "Alex Johnson", 
    amount: 120, 
    sessions: 3, 
    status: "pending", 
    submittedDate: "Dec 8, 2024",
    dueDate: "Dec 15, 2024",
    proofUrl: "/proof-alex-dec.pdf",
    reference: "TXN123456789",
    description: "December sessions payment"
  },
  { 
    id: 2, 
    student: "Emma Wilson", 
    amount: 80, 
    sessions: 2, 
    status: "pending", 
    submittedDate: "Dec 7, 2024",
    dueDate: "Dec 20, 2024",
    proofUrl: "/proof-emma-dec.pdf",
    reference: "TXN987654321",
    description: "Extra sessions payment"
  },
  { 
    id: 3, 
    student: "James Lee", 
    amount: 160, 
    sessions: 4, 
    status: "verified", 
    submittedDate: "Dec 5, 2024",
    verifiedDate: "Dec 6, 2024",
    proofUrl: "/proof-james-dec.pdf",
    reference: "TXN456789123",
    description: "Monthly subscription + extra session"
  },
  { 
    id: 4, 
    student: "Sofia Martinez", 
    amount: 49, 
    sessions: 1, 
    status: "rejected", 
    submittedDate: "Dec 4, 2024",
    rejectedDate: "Dec 5, 2024",
    proofUrl: "/proof-sofia-dec.pdf",
    reference: "TXN789123456",
    description: "Trial session payment",
    rejectionReason: "Payment amount doesn't match invoice"
  },
  { 
    id: 5, 
    student: "David Kim", 
    amount: 98, 
    sessions: 2, 
    status: "verified", 
    submittedDate: "Dec 1, 2024",
    verifiedDate: "Dec 2, 2024",
    proofUrl: "/proof-david-dec.pdf",
    reference: "TXN321654987",
    description: "November sessions payment"
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'pending':
      return <Badge className="bg-warning/10 text-warning border-warning/20"><Clock className="w-3 h-3 mr-1" />Pending Review</Badge>;
    case 'verified':
      return <Badge className="bg-success/10 text-success border-success/20"><CheckCircle2 className="w-3 h-3 mr-1" />Verified</Badge>;
    case 'rejected':
      return <Badge className="bg-destructive/10 text-destructive border-destructive/20"><XCircle className="w-3 h-3 mr-1" />Rejected</Badge>;
    default:
      return null;
  }
};

const TutorPayments = () => {
  const [selectedPayment, setSelectedPayment] = useState<typeof payments[0] | null>(null);
  const [reviewDialogOpen, setReviewDialogOpen] = useState(false);
  const [rejectionReason, setRejectionReason] = useState("");

  const pendingPayments = payments.filter(p => p.status === 'pending');
  const verifiedPayments = payments.filter(p => p.status === 'verified');
  const totalPending = pendingPayments.reduce((sum, p) => sum + p.amount, 0);
  const totalVerified = verifiedPayments.reduce((sum, p) => sum + p.amount, 0);

  const handleVerify = () => {
    console.log('Verifying payment:', selectedPayment?.id);
    setReviewDialogOpen(false);
    setSelectedPayment(null);
  };

  const handleReject = () => {
    console.log('Rejecting payment:', selectedPayment?.id, 'Reason:', rejectionReason);
    setReviewDialogOpen(false);
    setSelectedPayment(null);
    setRejectionReason("");
  };

  return (
    <DashboardLayout userType="tutor" userName="Sarah Chen">
      <div className="space-y-6">
        {/* Header */}
        <div className="animate-slide-up">
          <h1 className="text-3xl font-bold mb-2">Payment Verification</h1>
          <p className="text-muted-foreground">Review and verify student payment submissions</p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="bg-card rounded-xl border border-border p-5 shadow-soft">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-warning" />
              </div>
              <Badge variant="secondary">{pendingPayments.length}</Badge>
            </div>
            <div className="text-2xl font-bold">${totalPending}</div>
            <div className="text-sm text-muted-foreground">Pending Review</div>
          </div>
          <div className="bg-card rounded-xl border border-border p-5 shadow-soft">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-success" />
              </div>
            </div>
            <div className="text-2xl font-bold">${totalVerified}</div>
            <div className="text-sm text-muted-foreground">Verified This Month</div>
          </div>
          <div className="bg-card rounded-xl border border-border p-5 shadow-soft">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                <XCircle className="w-5 h-5 text-destructive" />
              </div>
            </div>
            <div className="text-2xl font-bold">{payments.filter(p => p.status === 'rejected').length}</div>
            <div className="text-sm text-muted-foreground">Rejected</div>
          </div>
          <div className="bg-card rounded-xl border border-border p-5 shadow-soft">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-primary" />
              </div>
            </div>
            <div className="text-2xl font-bold">${payments.reduce((sum, p) => sum + p.amount, 0)}</div>
            <div className="text-sm text-muted-foreground">Total Amount</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.15s' }}>
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search by student or reference..." className="pl-10" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-40">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="verified">Verified</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Pending Payments Alert */}
        {pendingPayments.length > 0 && (
          <div className="bg-warning/10 border border-warning/30 rounded-xl p-4 flex items-center gap-3 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <AlertCircle className="w-5 h-5 text-warning shrink-0" />
            <div className="flex-1">
              <p className="font-medium text-sm">You have {pendingPayments.length} payment(s) awaiting verification</p>
              <p className="text-xs text-muted-foreground">Please review and verify or reject these submissions</p>
            </div>
          </div>
        )}

        {/* Payments Table */}
        <div className="bg-card rounded-xl border border-border shadow-soft overflow-hidden animate-slide-up" style={{ animationDelay: '0.25s' }}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left text-sm font-medium text-muted-foreground p-4">Student</th>
                  <th className="text-left text-sm font-medium text-muted-foreground p-4">Description</th>
                  <th className="text-left text-sm font-medium text-muted-foreground p-4">Amount</th>
                  <th className="text-left text-sm font-medium text-muted-foreground p-4">Status</th>
                  <th className="text-left text-sm font-medium text-muted-foreground p-4">Submitted</th>
                  <th className="text-right text-sm font-medium text-muted-foreground p-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {payments.map((payment) => (
                  <tr key={payment.id} className="hover:bg-muted/30 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full gradient-sky flex items-center justify-center text-primary-foreground font-semibold text-sm">
                          {payment.student.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="font-medium">{payment.student}</div>
                          <div className="text-xs text-muted-foreground">Ref: {payment.reference}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="text-sm">{payment.description}</div>
                      <div className="text-xs text-muted-foreground">{payment.sessions} session(s)</div>
                    </td>
                    <td className="p-4">
                      <span className="font-semibold text-lg">${payment.amount}</span>
                    </td>
                    <td className="p-4">{getStatusBadge(payment.status)}</td>
                    <td className="p-4">
                      <div className="text-sm">{payment.submittedDate}</div>
                      {payment.status === 'verified' && (
                        <div className="text-xs text-success">Verified: {payment.verifiedDate}</div>
                      )}
                      {payment.status === 'rejected' && (
                        <div className="text-xs text-destructive">Rejected: {payment.rejectedDate}</div>
                      )}
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => {
                            setSelectedPayment(payment);
                            setReviewDialogOpen(true);
                          }}
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          Review
                        </Button>
                        {payment.status === 'pending' && (
                          <>
                            <Button 
                              size="sm"
                              onClick={() => {
                                setSelectedPayment(payment);
                                handleVerify();
                              }}
                            >
                              <CheckCircle2 className="w-4 h-4 mr-1" />
                              Verify
                            </Button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Review Dialog */}
        <Dialog open={reviewDialogOpen} onOpenChange={setReviewDialogOpen}>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Review Payment Proof</DialogTitle>
              <DialogDescription>
                Verify the payment details and approve or reject this submission.
              </DialogDescription>
            </DialogHeader>
            {selectedPayment && (
              <div className="space-y-4 pt-4">
                {/* Payment Info */}
                <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gradient-sky flex items-center justify-center text-primary-foreground font-semibold text-sm">
                      {selectedPayment.student.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-medium">{selectedPayment.student}</div>
                      <div className="text-sm text-muted-foreground">{selectedPayment.description}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="flex items-center gap-2 text-sm">
                      <DollarSign className="w-4 h-4 text-muted-foreground" />
                      <span className="font-semibold">${selectedPayment.amount}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>{selectedPayment.submittedDate}</span>
                    </div>
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">Reference: </span>
                    <span className="font-mono">{selectedPayment.reference}</span>
                  </div>
                </div>

                {/* Proof Preview */}
                <div className="border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-muted-foreground" />
                      <span className="font-medium">Payment Proof</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Open Full
                    </Button>
                  </div>
                  <div className="bg-muted rounded-lg h-48 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <FileText className="w-12 h-12 mx-auto mb-2" />
                      <p className="text-sm">Click to view proof document</p>
                    </div>
                  </div>
                </div>

                {/* Rejection Reason (for rejected or when rejecting) */}
                {selectedPayment.status === 'rejected' && selectedPayment.rejectionReason && (
                  <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <XCircle className="w-4 h-4 text-destructive" />
                      <span className="font-medium text-destructive">Rejection Reason</span>
                    </div>
                    <p className="text-sm">{selectedPayment.rejectionReason}</p>
                  </div>
                )}

                {selectedPayment.status === 'pending' && (
                  <>
                    <div className="space-y-2">
                      <Label>Rejection Reason (if rejecting)</Label>
                      <Textarea 
                        placeholder="Explain why this payment is being rejected..."
                        value={rejectionReason}
                        onChange={(e) => setRejectionReason(e.target.value)}
                      />
                    </div>

                    <div className="flex gap-3">
                      <Button 
                        variant="outline" 
                        className="flex-1 text-destructive hover:text-destructive"
                        onClick={handleReject}
                        disabled={!rejectionReason}
                      >
                        <XCircle className="w-4 h-4 mr-2" />
                        Reject
                      </Button>
                      <Button className="flex-1" onClick={handleVerify}>
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        Verify Payment
                      </Button>
                    </div>
                  </>
                )}

                {selectedPayment.status !== 'pending' && (
                  <Button variant="outline" className="w-full" onClick={() => setReviewDialogOpen(false)}>
                    Close
                  </Button>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
};

export default TutorPayments;
